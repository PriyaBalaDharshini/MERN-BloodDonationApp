import mongoose from "mongoose";

const prospectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    bloodgroup: { type: String, required: true },
    weight: { type: Number, required: true },
    age: { type: Number, required: true },
    healthissues: { type: String },
    bp: { type: String },
    status: { type: Number, default: 0 }
})

const prospectModel = mongoose.model("Prospect", prospectSchema)
export default prospectModel