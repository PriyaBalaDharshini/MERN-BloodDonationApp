import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    console.log("Auth Header:", authHeader); // Log the auth header

    if (authHeader) {
        const token = authHeader.split("")[1];
        console.log("Token:", token); // Log the token

        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                console.error("JWT Verification Error:", err); // Log any error in verification
                return res.status(403).json({ message: "Token is not valid", error: err });
            }

            console.log("Verified User:", user); // Log the verified user data
            req.user = user;
            next();
        });
    } else {
        console.log("No auth header found"); // Log when no auth header is found
        res.status(401).json({ message: "You are not authorized" });
    }
};

export const verifyAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log("User Role:", req.user.role); // Log the user role
        if (req.user.role === "admin" || req.user.role === "Admin") {
            next();
        } else {
            console.log("User is not an admin"); // Log if the user is not an admin
            res.status(403).json({ message: "You are not an admin" });
        }
    });
};

