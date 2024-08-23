import mongoose from "mongoose";

const prospectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true }, // Use String to handle large numbers and formatting
    bloodgroup: { type: String, required: true },
    weight: { type: Number, required: true },
    age: { type: Number, required: true },
    healthissues: { type: String },
    bp: { type: String }
});

const prospectModel = mongoose.model("Prospect", prospectSchema)
export default prospectModel