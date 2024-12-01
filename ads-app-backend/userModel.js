const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "personal",
        },
        planType: {
            type: String,
            default: "free",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

