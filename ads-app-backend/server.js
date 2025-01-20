const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
const adRoutes = require("./routes/adRoutes");

app.use("/api/users", userRoutes);
app.use("/api/ads", adRoutes);

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health check route
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running..." });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", error: err.message });
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "API endpoint not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
