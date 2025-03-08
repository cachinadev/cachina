const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const protect = require("../middlewares/authMiddleware");
const generateUniqueId = require("../utils/uniqueId"); // Import utility function for unique ID generation
const Ad = require("../models/ad");

// Register a new user
router.post("/register", async (req, res) => {
    const { phoneNumber, name, password, type } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ phoneNumber });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate a unique ID
        const uniqueId = generateUniqueId();

        // Create a new user
        user = new User({
            phoneNumber,
            name,
            password: hashedPassword,
            type,
            uniqueId, // Save unique ID
        });

        await user.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, phoneNumber: user.phoneNumber },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                type: user.type,
                uniqueId: user.uniqueId, // Include unique ID in the response
            },
        });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Registration failed. Please try again later." });
    }
});

// Fetch all users (for testing purposes)
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ message: "Failed to fetch users" });
    }
});

// Fetch logged-in user details
router.get("/me", protect, async (req, res) => {
    try {
        // Populate the adsPosted field to fetch actual ad details
        const user = await User.findById(req.user.id)
            .select("-password")
            .populate("adsPosted");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            type: user.type,
            planType: user.planType,
            adsPostedCount: user.adsPosted.length, // Send the count of ads posted
            adsPosted: user.adsPosted,             // Send the actual ads
            uniqueId: user.uniqueId,               // Include unique ID in the response
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Failed to fetch user details" });
    }
});

// Login a user
router.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        // Find the user by phone number
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, phoneNumber: user.phoneNumber },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                type: user.type,
                uniqueId: user.uniqueId, // Include unique ID in the response
            },
        });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

// Add to Favorites
router.post("/favorites/:adId", protect, async (req, res) => {
    try {
        const adId = req.params.adId;

        // Validate ObjectId
        if (!adId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid Ad ID format" });
        }

        const user = await User.findById(req.user.id);
        const ad = await Ad.findById(adId);

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (!user.favorites.includes(ad._id)) {
            user.favorites.push(ad._id);
            ad.favoritesCount = (ad.favoritesCount || 0) + 1; 
            await ad.save();
        }

        await user.save();
        res.status(200).json({ message: "Ad added to favorites", favoritesCount: ad.favoritesCount });
    } catch (error) {
        console.error("Error adding to favorites:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Remove an ad from favorites
router.delete("/favorites/:adId", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const ad = await Ad.findById(req.params.adId);

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (user.favorites.includes(ad._id)) {
            user.favorites = user.favorites.filter(fav => fav.toString() !== ad._id.toString());
            ad.favoritesCount = Math.max(0, ad.favoritesCount - 1); // Decrement favorites count, prevent negatives
            await ad.save();
        }

        await user.save();
        res.status(200).json({ message: "Ad removed from favorites" });
    } catch (error) {
        console.error("Error removing from favorites:", error);
        res.status(500).json({ message: "Failed to remove from favorites" });
    }
});

// Fetch user's favorite ads
router.get("/favorites", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate({
            path: "favorites",
            model: "Ad"
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.favorites);
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ message: "Failed to fetch favorites" });
    }
});

// ✅ Route to fetch a user's ads by username
router.get("/:username/ads", async (req, res) => {
    try {
        const username = req.params.username.toLowerCase(); // Normalize to lowercase
        console.log("🔍 Looking for user:", username);

        // ✅ Find user by username
        const user = await User.findOne({ username: username });

        if (!user) {
            console.log("❌ User not found");
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        // ✅ Fetch user's ads
        const ads = await Ad.find({ _id: { $in: user.adsPosted } });
        res.json(ads);
    } catch (error) {
        console.error("❌ Error fetching user ads:", error);
        res.status(500).json({ message: "Error en el servidor." });
    }
});


module.exports = router;