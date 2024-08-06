import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const DB = process.env.DB
const dbConnection = async () => {
    try {
        await mongoose.connect(DB)
            .then(() => console.log("DB connection successfull"))
    } catch (error) {
        console.log(error);
        setTimeout(dbConnection, 5000)
    }
}

export default dbConnection;