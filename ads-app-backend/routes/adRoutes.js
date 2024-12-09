const express = require("express");
const router = express.Router();
const Ad = require("../models/ad");
const User = require("../models/user"); // Ensure User model is imported
const protect = require("../middlewares/authMiddleware");

// Create an ad (POST /api/ads)
router.post("/", protect, async (req, res) => {
    try {
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
            pictures,
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

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
            pictures,
            createdBy: req.user.id,
        });

        await ad.save();

        // Add the ad to the user's adsPosted array
        const user = await User.findById(req.user.id);
        user.adsPosted.push(ad._id);
        await user.save();

        res.status(201).json({ message: "Ad created successfully", ad });
    } catch (error) {
        console.error("Error creating ad:", error.message);
        res.status(500).json({ message: "Failed to create ad" });
    }
});

// Fetch Ads by Category
router.get("/category/:category", async (req, res) => {
    const { category } = req.params;

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

// Get All Ads
router.get("/", async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching all ads:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch Ads Created by the Authenticated User
router.get("/my-ads", protect, async (req, res) => {
    try {
        const ads = await Ad.find({ createdBy: req.user.id });
        res.status(200).json(ads);
    } catch (error) {
        console.error("Error fetching user ads:", error.message);
        res.status(500).json({ message: "Failed to fetch ads" });
    }
});

// Delete an Ad
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

        // Remove the ad from the user's adsPosted array
        const user = await User.findById(req.user.id);
        user.adsPosted = user.adsPosted.filter((adId) => adId.toString() !== req.params.id);
        await user.save();

        res.status(200).json({ message: "Ad deleted successfully" });
    } catch (error) {
        console.error("Error deleting ad:", error.message);
        res.status(500).json({ message: "Failed to delete ad" });
    }
});

// Update an Ad
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
            new: true, // Return the updated ad
            runValidators: true, // Ensure validations are applied
        });

        res.status(200).json({ message: "Ad updated successfully", updatedAd });
    } catch (error) {
        console.error("Error updating ad:", error.message);
        res.status(500).json({ message: "Failed to update ad" });
    }
});

module.exports = router;
