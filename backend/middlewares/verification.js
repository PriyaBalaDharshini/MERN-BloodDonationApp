import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) return res.status(403).json({ message: "Token is not valid" })
            req.user = user;
            next();
        })
    } else {
        res.status(401).json({ message: "You are not authorized" })
    }
}

export const verifyAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === "admin" || "Admin") {
            next()
        } else {
            res.status(403).json({ message: "You are not an admin" })
        }
    })
}
