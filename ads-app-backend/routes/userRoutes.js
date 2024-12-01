const express = require("express");
const router = express.Router(); // Initialize the router
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const protect = require("../middlewares/authMiddleware");

// Register a new user
router.post("/register", async (req, res) => {
    const { phoneNumber, name, password, type } = req.body;

    try {
        let user = await User.findOne({ phoneNumber });
        if (user) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            phoneNumber,
            name,
            password: hashedPassword,
            type,
        });

        await user.save();

        // Generate a token
        const token = jwt.sign(
            { id: user._id, phoneNumber: user.phoneNumber },
            process.env.JWT_SECRET, // Ensure this matches the value in .env
            { expiresIn: "1h" }
        );

        console.log("Generated JWT:", token); // Log the generated token

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                type: user.type,
            },
        });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: error.message });
    }
});

// Fetch all users (for testing purposes)
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error); // Log the error details
        res.status(500).json({ message: error.message });
    }
});

// Fetch logged-in user details

router.get("/me", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Failed to fetch user details" });
    }
});

// Login a user
router.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User from database:", user);
        console.log("Provided password:", password);
        console.log("Password from database:", user.password);

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isPasswordMatch);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id, phoneNumber: user.phoneNumber }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        console.log("Decoded token:", jwt.verify(token, process.env.JWT_SECRET));

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                type: user.type,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});



module.exports = router; // Export the router