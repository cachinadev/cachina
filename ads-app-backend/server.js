const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

// 🌍 Middleware
app.use(cors());
app.use(express.json()); // ✅ Ensure JSON parsing is enabled

// 🛠️ Connect to Database
connectDB();

// 🚀 Import Routes
const userRoutes = require("./routes/userRoutes");
const adRoutes = require("./routes/adRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const routeRoutes = require("./routes/routeRoutes"); // ✅ Corrected transport system route import

// ✅ Register Routes (Order Matters)
app.use("/api/users", userRoutes);
app.use("/api/ads", adRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/rutas", routeRoutes); // ✅ Ensure correct API path

// 📂 Serve Uploaded Files (Images, Documents, etc.)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🏥 Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({ message: "✅ API is running smoothly 🚀" });
});

// ❌ Handle Undefined Routes (404)
app.use((req, res) => {
    res.status(404).json({ message: "❌ API endpoint not found" });
});

// 🔥 Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("⚠️ Internal Server Error:", process.env.NODE_ENV === "development" ? err.stack : err.message);
    res.status(500).json({ message: "❌ Internal server error", error: err.message });
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server is running on: http://localhost:${PORT}`);
});
