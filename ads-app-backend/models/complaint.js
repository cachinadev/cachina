const mongoose = require("mongoose");

// Function to generate a unique complaint ID (RCL-XXXXXX)
const generateComplaintId = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit random number
    return `RCL-${randomNum}`;
};

const ComplaintSchema = new mongoose.Schema({
    complaintId: { type: String, unique: true, default: generateComplaintId }, // ✅ Unique Complaint ID
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    documentType: { type: String },
    documentNumber: { type: String },
    contractType: { type: String },
    serviceId: { type: String },
    complaintType: { type: String },
    details: { type: String, maxlength: 5000 },
    acceptedPrivacyPolicy: { type: Boolean, required: true }, // ✅ Only required field
    status: { type: String, enum: ["pending", "resolved"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Complaint", ComplaintSchema);
