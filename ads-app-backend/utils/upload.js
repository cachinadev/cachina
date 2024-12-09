const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../uploads"); // Path to the uploads folder
        // Ensure the uploads directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: async (req, file, cb) => {
        try {
            console.log("req.user in filename:", req.user); // Debugging
            const user = req.user; // Assuming req.user is populated via middleware
            const ext = path.extname(file.originalname); // Extract the file extension
            const filename = `${user.uniqueId}_${Date.now()}${ext}`; // Unique filename
            console.log("Generated filename:", filename); // Debugging
            cb(null, filename);
        } catch (err) {
            console.error("Error generating filename:", err.message);
            cb(err);
        }
    },
});


const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only JPEG, PNG, and JPG images are allowed"), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

module.exports = upload;
