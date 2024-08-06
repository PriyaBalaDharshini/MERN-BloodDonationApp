import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


// RegisterUser
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if the email already exists
        const emailCheck = await userModel.findOne({ email });
        if (emailCheck) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new userModel({
            name,
            email,
            role: role || "user",
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", newUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Corrected typo here

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email does not exist. Please register" });
        }

        const comparePassword = await bcrypt.compare(password, user.password); // Using the correct variable name

        if (!comparePassword) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const { password: _, ...info } = user._doc; 
        const accessToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SEC,
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: "Login successful.", ...info, accessToken });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}


export default { registerUser, loginUser }