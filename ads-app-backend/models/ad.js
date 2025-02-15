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
        // Common fields
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        pictures: { type: [String], default: [] },
        views: { type: Number, default: 0 },
        favoritesCount: { type: Number, default: 0 },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        isPremium: { type: Boolean, default: false },

        // Location fields
        departamento: { type: String, trim: true },
        provincia: { type: String, trim: true },
        distrito: { type: String, trim: true },
        dirección: { type: String, maxlength: 255, trim: true, default: "" },

        location: {
            lat: { type: Number },
            lng: { type: Number },
        },

        // Contact and cost
        contactNumber: {
            type: String,
            required: true,
            match: /^\d{9}$/,
            trim: true,
        },
        cost: { type: Number, min: 0, default: null },
        currency: { type: String, enum: ["Soles", "Dollars"], default: "Cotizar" },

        // Fields specific to "Alquilo" category
        areaTotal: { type: String, trim: true, default: "" },
        habitaciones: { type: Number, min: 0, default: null },
        planta: { type: Number, min: 0, default: null },
        bano: { type: String, enum: ["Yes", "No"], default: "No" },
        mobiliario: { type: String, maxlength: 255, trim: true, default: "" },
        equipamiento: { type: String, maxlength: 255, trim: true, default: "" },
        servicios: { type: String, maxlength: 255, trim: true, default: "" },

        // Fields specific to "Deporte" category
        estacionamiento: { type: String, enum: ["Yes", "No"], default: "No" },
        deporteType: { type: [String], default: [] },

        // Additional category-specific fields
        alquiloType: { type: String, trim: true, default: "" },
        facilities: { type: String, trim: true, default: "" },
        availableHours: { type: String, trim: true, default: "" },
        googleLink: { type: String, trim: true, default: "" },
        website: { type: String, trim: true, default: "" },

        // Review System
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

        // User Interactions
        interactions: [interactionSchema]
    },
    {
        timestamps: true,
    }
);

// Indexes for faster query performance
adSchema.index({ category: 1 });
adSchema.index({ createdBy: 1 });
adSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Ad", adSchema);
