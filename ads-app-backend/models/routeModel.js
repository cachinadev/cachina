const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    path: [{ lat: Number, lng: Number }],
    vehicles: [
        {
            id: String,
            lat: Number,
            lng: Number,
            lastUpdate: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model("Route", RouteSchema);
