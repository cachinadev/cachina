const express = require("express");
const router = express.Router();
const Ad = require("../models/ad");
const User = require("../models/user");
const protect = require("../middlewares/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer configuration for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        try {
            const user = req.user; // Assumes `req.user` is populated via `protect` middleware
            const ext = path.extname(file.originalname); // Get file extension
            const filename = `${user.uniqueId}_${Date.now()}${ext}`; // Generate unique filename
            cb(null, filename);
        } catch (err) {
            console.error("Error generating filename:", err.message);
            cb(err);
        }
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only JPEG, PNG, and JPG images are allowed"), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

// Route to handle ad creation with image upload
router.post(
    "/upload-images",
    protect,
    upload.array("images", 3), // Allow up to 3 images per ad
    async (req, res) => {
        try {
            console.log("Uploaded files:", req.files);

            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No files uploaded" });
            }

            const {
                title,
                description,
                category,
                departamento,
                provincia,
                distrito,
                contactNumber,
                cost,
                currency,
                address,
                googleLink,
                areaTotal,
                habitaciones,
                planta,
                bano,
                mobiliario,
                equipamiento,
                servicios,
            } = req.body;

            if (!title || !description || !category) {
                return res.status(400).json({ message: "Title, Description, and Category are required" });
            }

            // Map uploaded images to their paths
            const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
            console.log("Image paths to save in DB:", imagePaths);

            // Create a new Ad
            const ad = new Ad({
                title,
                description,
                category,
                departamento,
                provincia,
                distrito,
                contactNumber,
                cost,
                currency,
                address,
                googleLink,
                areaTotal,
                habitaciones,
                planta,
                bano,
                mobiliario,
                equipamiento,
                servicios,
                pictures: imagePaths, // Ensure this matches the schema field
                createdBy: req.user.id,
            });

            // Save the Ad instance to the database
            await ad.save();

            // Add the ad ID to the user's `adsPosted` array
            const user = await User.findById(req.user.id);
            user.adsPosted.push(ad._id);
            await user.save();

            res.status(201).json({ message: "Ad created successfully", ad });
        } catch (error) {
            console.error("Error creating ad with images:", error.message);
            res.status(500).json({ message: "Failed to create ad" });
        }
    }
);

// Route to serve uploaded images
router.get("/uploads/:filename", (req, res) => {
    const imagePath = path.join(__dirname, "../uploads", req.params.filename);
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ message: "File not found" });
        }
        res.sendFile(imagePath);
    });
});

// Fetch ads by category
router.get("/category/:category", async (req, res) => {
    try {
        const ads = await Ad.find({ category });
        if (!ads.length) {
            return res.status(404).json({ message: `No ads found for the category: ${category}` });
        }
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching ads by category:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get all ads
router.get("/", async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching all ads:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch ads created by the authenticated user
router.get("/my-ads", protect, async (req, res) => {
    try {
        const ads = await Ad.find({ createdBy: req.user.id });
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching user ads:", error.message);
        res.status(500).json({ message: "Failed to fetch ads" });
    }
});

// Delete an ad
router.delete("/:id", protect, async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (ad.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this ad" });
        }

        await Ad.findByIdAndDelete(req.params.id);

        const user = await User.findById(req.user.id);
        user.adsPosted = user.adsPosted.filter((adId) => adId.toString() !== req.params.id);
        await user.save();

        res.status(200).json({ message: "Ad deleted successfully" });
    } catch (error) {
        console.error("Error deleting ad:", error.message);
        res.status(500).json({ message: "Failed to delete ad" });
    }
});

// Update an ad
router.put("/:id", protect, async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (ad.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this ad" });
        }

        const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ message: "Ad updated successfully", updatedAd });
    } catch (error) {
        console.error("Error updating ad:", error.message);
        res.status(500).json({ message: "Failed to update ad" });
    }
});

module.exports = router;