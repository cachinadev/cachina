const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
    ip: String,
    location: {
        city: String,
        region: String,
        country: String,
        latitude: Number,
        longitude: Number,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const adSchema = new mongoose.Schema(
    {
        // 🏷️ Common Fields
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        pictures: { type: [String], default: [] }, // 📸 Array of image URLs
        views: { type: Number, default: 0 },
        favoritesCount: { type: Number, default: 0 },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        isPremium: { type: Boolean, default: false },

        // 📍 Location Fields
        departamento: { type: String, trim: true, required: true },
        provincia: { type: String, trim: true, required: true },
        distrito: { type: String, trim: true, required: true },
        address: { type: String, maxlength: 250, trim: true, default: ""}, // ✅ Ensure address is stored

        location: {
            lat: { type: Number },
            lng: { type: Number },
        },

        // 📞 Contact & Cost
        contactNumber: {
            type: String,
            required: true,
            match: /^\d{9}$/,
            trim: true,
        },

        cost: { type: Number, min: 0, default: null },
        currency: { 
            type: String, 
            enum: ["Soles", "Dollars", "Cotizar"], 
            default: "Cotizar" // ✅ Set initial default
        },
        paymentMethods: { type: String, trim: true, default: "" }, // ✅ Now optional

        // 📅 Availability
        availableDays: { type: String, trim: true, default: "" }, 
        availableHours: { type: String, trim: true, default: "" }, 

        // 🔗 External Links
        googleLink: { type: String, trim: true, default: "" },
        website: { type: String, trim: true, default: "" },

        // ⭐ Review System
        reviews: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
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
            }
        ],

        // 📊 User Interactions
        interactions: [interactionSchema]
    },
    {
        timestamps: true,
    }
);

// ✅ Middleware to ensure currency is set to "Cotizar" when cost is null or 0
adSchema.pre("save", function (next) {
    if (this.cost === null || this.cost === 0) {
        this.currency = "Cotizar";
    }
    next();
});

// ⚡ Indexes for faster query performance
adSchema.index({ category: 1 });
adSchema.index({ createdBy: 1 });
adSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Ad", adSchema);
