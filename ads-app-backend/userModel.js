const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  planType: { type: String, default: "free" },
  adsPosted: { type: Array, default: [] },
  uniqueId: { type: String }, // Add this field
});

module.exports = mongoose.model("User", userSchema);