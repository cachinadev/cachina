const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
const adRoutes = require("./routes/adRoutes"); // Import adRoutes

app.use("/api/users", userRoutes);
app.use("/api/ads", adRoutes); // Use adRoutes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
