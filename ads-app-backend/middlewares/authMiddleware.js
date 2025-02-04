const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Extract the token from the Authorization header
            token = req.headers.authorization.split(" ")[1];

            // Verify the token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach the user information to the request object
            req.user = await User.findById(decoded.id).select("-password");

            // Check if the user exists
            if (!req.user) {
                return res.status(401).json({ message: "Not authorized, user not found" });
            }

            // Move to the next middleware or route handler
            next();
        } catch (error) {
            // Handle token verification errors
            console.error("Authorization error:", error.message);

            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token expired, please log in again" });
            }

            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ message: "Invalid token, please log in again" });
            }

            res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else {
        // Check for token in cookies as a fallback
        token = req.cookies?.token;

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = await User.findById(decoded.id).select("-password");

                if (!req.user) {
                    return res.status(401).json({ message: "Not authorized, user not found" });
                }

                next();
            } catch (error) {
                console.error("Authorization error:", error.message);
                return res.status(401).json({ message: "Invalid or expired token" });
            }
        } else {
            // If the Authorization header and cookie are missing
            res.status(401).json({ message: "Not authorized, no token provided" });
        }
    }
};

module.exports = protect;