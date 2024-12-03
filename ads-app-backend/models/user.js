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
        default: "free",
    },
    adsPosted: {
        type: Array,
        default: [],
    },

    uniqueId: { 
        type: String, 
        required: true, unique: true },

});

module.exports = mongoose.model("User", userSchema);
