const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true, // Ensure password is required
    },
    type: {
        type: String,
        enum: ["personal", "company"],
        required: true,
    },
    planType: {
        type: String,
        default: "Gratis",
    },
    uniqueId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    adsPosted: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Ad" 
    }],
    favorites: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Ad" 
    }],
    reviews: [{
        ad: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ad",
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("User", userSchema);
