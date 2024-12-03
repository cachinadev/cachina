const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, default: "personal" },
    planType: { type: String, default: "free" },
    adsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ad" }],
    uniqueId: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);

module.exports = User;

