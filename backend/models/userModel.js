import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        status: { type: Number, default: 0 },
        role: { type: String, default: "admin" }  // Default role set to "user"
    },
    { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
