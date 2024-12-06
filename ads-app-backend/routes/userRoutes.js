const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const protect = require("../middlewares/authMiddleware");
const generateUniqueId = require("../utils/uniqueId"); // Import utility function for unique ID generation

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
            { expiresIn: "1h" }
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
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            type: user.type,
            planType: user.planType,
            adsPosted: user.adsPosted.length, // Send the count of ads posted
//          adsPosted: user.adsPosted || [],
            uniqueId: user.uniqueId, // Include unique ID in the response
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

module.exports = router;