const express = require("express");
const router = express.Router();
const Route = require("../models/routeModel");

// ✅ GET all routes (Fix path: `/api/rutas` already defined in server.js)
router.get("/", async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (error) {
        console.error("❌ Error fetching routes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ✅ GET a specific route by ID (Fix path: `/api/rutas/:id`)
router.get("/:id", async (req, res) => {
    try {
        const route = await Route.findById(req.params.id);
        if (!route) {
            return res.status(404).json({ message: "Route not found" });
        }
        res.json(route);
    } catch (error) {
        console.error("❌ Error fetching route:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
