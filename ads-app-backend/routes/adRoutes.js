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
        const ext = path.extname(file.originalname);
        const filename = `${req.user.id}_${Date.now()}${ext}`;
        cb(null, filename);
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

// --- Route Handlers ---

// Ad creation with image upload
router.post(
    "/upload-images",
    protect,
    upload.array("images", 5), // Allow up to 5 images
    async (req, res) => {
        try {
            const adData = { ...req.body };
            adData.pictures = req.files.map((file) => `/uploads/${file.filename}`);
            adData.createdBy = req.user.id;

            if (!adData.title || !adData.description || !adData.category) {
                return res.status(400).json({ message: "Title, Description, and Category are required." });
            }

            const ad = new Ad(adData);
            await ad.save();

            const user = await User.findById(req.user.id);
            user.adsPosted.push(ad._id);
            await user.save();

            res.status(201).json({ message: "Ad created successfully", ad });
        } catch (error) {
            console.error("Error creating ad:", error.message);
            res.status(500).json({ message: "Failed to create ad" });
        }
    }
);

// Ad update route
router.put("/:id", protect, async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (ad.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this ad" });
        }

        const { pictures, ...otherFields } = req.body;

        const updatedFields = {
            ...otherFields,
            pictures: pictures || ad.pictures,
        };

        const updatedAd = await Ad.findByIdAndUpdate(req.params.id, updatedFields, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ message: "Ad updated successfully", updatedAd });
    } catch (error) {
        console.error("Error updating ad:", error.message);
        res.status(500).json({ message: "Failed to update ad" });
    }
});

// Serve uploaded images
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
            return res.status(404).json({ message: `No ads found for category: ${category}` });
        }
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching ads by category:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch all ads
router.get("/", async (req, res) => {
    try {
        const ads = await Ad.find().populate("createdBy", "name email");
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching all ads:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch user-specific ads
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

// Fetch ad details by ID and increment view count
router.get("/:id", async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id).populate("createdBy", "name email");
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        // Increment the views count
        ad.views += 1;
        await ad.save();

        res.status(200).json(ad);
    } catch (error) {
        console.error("Error fetching ad details:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// Add a review to an ad
router.post("/:adId/reviews", protect, async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const ad = await Ad.findById(req.params.adId);

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        const newReview = {
            user: req.user._id,
            rating,
            comment,
        };

        ad.reviews.push(newReview);
        await ad.save();

        res.status(201).json({ message: "Review added successfully", review: newReview });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ message: "Failed to add review" });
    }
});

// Get all reviews for an ad
router.get("/:adId/reviews", async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.adId).populate("reviews.user", "name");

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        res.status(200).json(ad.reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: "Failed to fetch reviews" });
    }
});

// Delete a review (only by the review owner)
router.delete("/:adId/reviews/:reviewId", protect, async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.adId);

        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        const review = ad.reviews.id(req.params.reviewId);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to delete this review" });
        }

        review.remove();
        await ad.save();

        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({ message: "Failed to delete review" });
    }
});

module.exports = router;
