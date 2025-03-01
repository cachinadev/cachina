const express = require("express");
const router = express.Router();
const Ad = require("../models/ad");
const User = require("../models/user");
const protect = require("../middlewares/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const axios = require("axios");

// Analytics Route (Static Route Comes First)
router.get("/analytics", protect, async (req, res) => {
    try {
        const ads = await Ad.find({ createdBy: req.user.id });

        const analytics = ads.map(ad => ({
            title: ad.title,
            views: ad.views,
            favorites: ad.favoritesCount,
            engagementRate: ad.views > 0 ? ((ad.favoritesCount / ad.views) * 100).toFixed(2) : "0.00"
        }));

        res.status(200).json(analytics);
    } catch (error) {
        console.error("Error fetching analytics:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Remove from Favorites Route
router.delete("/users/favorites/:adId", protect, async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.adId);
        if (!ad) return res.status(404).json({ message: "Ad not found" });

        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.favorites = user.favorites.filter((favId) => favId.toString() !== ad._id.toString());
        await user.save();

        res.json({ message: "Ad removed from favorites successfully" });
    } catch (error) {
        console.error("Error removing favorite:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Configure Multer for Image Uploads
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
        cb(null, `${Date.now()}${ext}`);
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
    limits: { fileSize: 5 * 1024 * 1024 },
});

// ✅ Route: Create Ad with Images
router.post("/create-ad", protect, upload.array("images", 5), async (req, res) => {
    try {
        console.log("📸 Ad Creation Request Received");

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Please upload at least one image." });
        }

        const uploadedImages = req.files.map((file) => `/uploads/${file.filename}`);
        const { title, description, category, contactNumber, ...otherFields } = req.body;

        if (!title || !description || !category || !contactNumber) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const newAd = new Ad({
            title,
            description,
            category,
            contactNumber,
            ...otherFields,
            pictures: uploadedImages,
            createdBy: req.user.id,
        });

        await newAd.save();

        const user = await User.findById(req.user.id);
        user.adsPosted.push(newAd._id);
        await user.save();

        res.status(201).json({ message: "Ad created successfully", ad: newAd });

    } catch (error) {
        console.error("❌ Error creating ad:", error.message);
        res.status(500).json({ message: "Failed to create ad" });
    }
});

// ✅ Route: Upload New Images for an Existing Ad
router.post("/:id/upload-images", protect, upload.array("images", 5), async (req, res) => {
    try {
        console.log(`📸 Uploading new images for ad: ${req.params.id}`);

        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (ad.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update images" });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Please upload at least one image." });
        }

        // ✅ Delete old images
        ad.pictures.forEach((oldImage) => {
            const oldImagePath = path.join(__dirname, "..", oldImage);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        });

        const uploadedImages = req.files.map((file) => `/uploads/${file.filename}`);
        ad.pictures = uploadedImages;
        await ad.save();

        res.status(200).json({ message: "Images replaced successfully", pictures: ad.pictures });

    } catch (error) {
        console.error("❌ Error uploading images:", error.message);
        res.status(500).json({ message: "Failed to upload images" });
    }
});

// ✅ Route: Update Ad (Text and Existing Images)
router.put("/:id", protect, async (req, res) => {
    try {
        console.log(`✏️ Updating Ad: ${req.params.id}`);

        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }

        if (ad.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this ad" });
        }

        const { pictures, ...otherFields } = req.body;

        // ✅ Ensure existing pictures are kept
        const updatedFields = {
            ...otherFields,
            pictures: pictures ? pictures : ad.pictures,
        };

        const updatedAd = await Ad.findByIdAndUpdate(req.params.id, updatedFields, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ message: "Ad updated successfully", updatedAd });

    } catch (error) {
        console.error("❌ Error updating ad:", error.message);
        res.status(500).json({ message: "Failed to update ad" });
    }
});

// ✅ Serve Uploaded Images
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));

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

        // Update user ads
        const user = await User.findById(req.user.id);
        user.adsPosted = user.adsPosted.filter((adId) => adId.toString() !== req.params.id);
        await user.save();

        // ✅ Ensure a valid JSON response is returned
        return res.status(200).json({ success: true, message: "Ad deleted successfully" });
    } catch (error) {
        console.error("Error deleting ad:", error.message);
        return res.status(500).json({ success: false, message: "Failed to delete ad" });
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

// ✅ Keep dynamic routes AFTER fixed routes
router.get("/:id", async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found" });
        }
        res.status(200).json(ad);
    } catch (error) {
        console.error("Error fetching ad details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;