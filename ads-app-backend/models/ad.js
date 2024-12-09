const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, required: true },
    pictures: [String],
    location: {
        lat: Number,
        lng: Number,
    },
    views: { type: Number, default: 0 },
    favoritesCount: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isPremium: { type: Boolean, default: false },
});

module.exports = mongoose.model("Ad", adSchema);
