const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Ensure no extra spaces
    },
    name: {
        type: String,
        required: true,
        trim: true, // Remove spaces from start & end
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true, // ✅ Ensure lowercase & trimmed for easier lookups
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

// ✅ Auto-generate `username` field when saving user
userSchema.pre("save", function (next) {
    if (!this.username) {
        this.username = this.name.toLowerCase().replace(/\s+/g, ""); // Remove spaces & convert to lowercase
    }
    next();
});

module.exports = mongoose.model("User", userSchema);
