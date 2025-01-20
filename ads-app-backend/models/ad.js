const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
    {
        // Common fields
        title: { type: String, required: true, trim: true }, // Ad title (required, trimmed)
        description: { type: String, required: true, trim: true }, // Description (required, trimmed)
        category: { type: String, required: true, trim: true }, // Category (required, trimmed)
        pictures: { type: [String], default: [] }, // Array of image paths
        views: { type: Number, default: 0 }, // Number of views
        favoritesCount: { type: Number, default: 0 }, // Number of favorites
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }, // Reference to the User model
        isPremium: { type: Boolean, default: false }, // Indicates premium ad status

        // Location fields
        departamento: { type: String, trim: true }, // Department
        provincia: { type: String, trim: true }, // Province
        distrito: { type: String, trim: true }, // District
        dirección: { type: String, maxlength: 255, trim: true, default: "" }, // Equipment description

        location: {
            lat: { type: Number }, // Latitude (optional)
            lng: { type: Number }, // Longitude (optional)
        },

        // Contact and cost
        contactNumber: {
            type: String,
            required: true,
            match: /^\d{9}$/, // Ensure it's exactly 9 digits
            trim: true,
        }, // Contact number (required, validated, trimmed)
        cost: { type: Number, min: 0, default: null }, // Cost (optional, minimum 0)
        currency: { type: String, enum: ["Soles", "Dollars"], default: "Soles" }, // Currency with enum options

        // Fields specific to "Alquilo" category
        areaTotal: { type: String, trim: true, default: "" }, // Total area (optional)
        habitaciones: { type: Number, min: 0, default: null }, // Number of rooms (optional)
        planta: { type: Number, min: 0, default: null }, // Floor number (optional)
        bano: { type: String, enum: ["Yes", "No"], default: "No" }, // Bathroom availability
        mobiliario: { type: String, maxlength: 255, trim: true, default: "" }, // Furniture description
        equipamiento: { type: String, maxlength: 255, trim: true, default: "" }, // Equipment description
        servicios: { type: String, maxlength: 255, trim: true, default: "" }, // Services description

        // Fields specific to "Deporte" category
        estacionamiento: { type: String, enum: ["Yes", "No"], default: "No" }, // Parking availability
        deporteType: { type: [String], default: [] }, // Array of sport types (e.g., ["Football", "Basketball"])

        // Additional category-specific fields
        alquiloType: { type: String, trim: true, default: "" }, // Type of property for "Alquilo"
        facilities: { type: String, trim: true, default: "" }, // Facilities description
        availableHours: { type: String, trim: true, default: "" }, // Available hours
        googleLink: { type: String, trim: true, default: "" }, // Google Maps link (optional)
        website: { type: String, trim: true, default: "" }, // Optional website or social media link
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

// Indexes for faster query performance
adSchema.index({ category: 1 }); // Index for category
adSchema.index({ createdBy: 1 }); // Index for user-specific queries
adSchema.index({ createdAt: 1 }); // Index for sorting by creation date

// Export the Ad model
module.exports = mongoose.model("Ad", adSchema);
