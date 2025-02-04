const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const Ad = require("../models/ad");
const protect = require("../middlewares/authMiddleware");

// Add a review to an ad
router.post("/:id/reviews", protect, async (req, res) => {
    try {
        const { rating, comment } = req.body;

        // Validate rating
        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5." });
        }

        // Validate comment
        if (!comment || comment.trim().length === 0) {
            return res.status(400).json({ message: "Comment cannot be empty." });
        }

        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: "Ad not found." });
        }

        // Prevent duplicate reviews from the same user
        const existingReview = await Review.findOne({
            ad: req.params.id,
            user: req.user.id,
        });

        if (existingReview) {
            return res.status(400).json({ message: "You've already reviewed this ad." });
        }

        const newReview = new Review({
            ad: req.params.id,
            user: req.user.id,
            rating,
            comment,
        });

        await newReview.save();

        // Populate user's name before sending the response
        await newReview.populate("user", "name");

        res.status(201).json(newReview);
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ message: "Failed to add review. Please try again later." });
    }
});

// Get reviews for an ad
router.get("/:id/reviews", async (req, res) => {
    try {
        const reviews = await Review.find({ ad: req.params.id })
            .populate("user", "name")
            .sort({ createdAt: -1 })  // Show latest reviews first
            .lean();                  // Optimize query for performance

        res.status(200).json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: "Failed to fetch reviews. Please try again later." });
    }
});

module.exports = router;
