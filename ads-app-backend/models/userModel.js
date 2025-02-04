const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true }, // User's full name (required)
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"], // Email validation
        }, // Email (required, unique, validated)
        password: { type: String, required: true }, // Hashed password (required)
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            match: /^\d{9}$/, // Ensure it's exactly 9 digits
        }, // Phone number (required, unique, validated)
        isAdmin: { type: Boolean, default: false }, // Indicates if the user has admin privileges
        adsPosted: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ad", // Reference to the Ad model
            },
        ], // List of ads created by the user
        favorites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ad", // Reference to the Ad model for favorite ads
            },
        ], // List of favorite ads
        profilePicture: { type: String, default: "" }, // Profile picture URL (optional)
        address: {
            departamento: { type: String, trim: true }, // Department (optional)
            provincia: { type: String, trim: true }, // Province (optional)
            distrito: { type: String, trim: true }, // District (optional)
        }, // Address details
        resetToken: { type: String }, // For password reset functionality (optional)
        tokenExpiry: { type: Date }, // Expiry time for the reset token (optional)
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

// Add an index for faster queries on email and phoneNumber
userSchema.index({ email: 1 });
userSchema.index({ phoneNumber: 1 });

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
