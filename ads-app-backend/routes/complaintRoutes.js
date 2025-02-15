const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaint"); // ✅ Ensure model exists

// 📌 Complaint Submission Route
router.post("/submit", async (req, res) => {
    try {
        const { 
            name, lastName, email, phoneNumber, address, documentType, 
            documentNumber, contractType, serviceId, complaintType, details, acceptedPrivacyPolicy 
        } = req.body; // ✅ Extract all values safely

        if (acceptedPrivacyPolicy === undefined) {
            return res.status(400).json({ message: "You must accept the privacy policy." });
        }

        const newComplaint = new Complaint({
            name,
            lastName,
            email,
            phoneNumber,
            address,
            documentType,
            documentNumber,
            contractType,
            serviceId,
            complaintType,
            details,
            acceptedPrivacyPolicy,
            status: "pending", // Default status
        });

        await newComplaint.save();
        res.status(201).json({ message: "Reclamo presentado con éxito" });

    } catch (error) {
        console.error("Error submitting complaint:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

module.exports = router;
