const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Ensure this is the correct path to your User model

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log("Token received:", token);

            // Decode the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded token:", decoded);

            // Find the user in the database
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                console.error("Authorization error: User not found in the database");
                return res.status(401).json({ message: "User not found" });
            }

            console.log("Authenticated user:", req.user);
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error("Authorization error:", error.message);
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else {
        console.error("No token provided in the authorization header");
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};

module.exports = protect;