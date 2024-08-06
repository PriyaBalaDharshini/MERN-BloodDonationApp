import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors"
import dbConnection from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js"
import donorRoutes from "./routes/donorRoutes.js"
import prospectRoutes from "./routes/prospectRoutes.js"

dotenv.config();

const port = process.env.PORT || 8003;

const app = express();
app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/donor", donorRoutes)
app.use("/prospect", prospectRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});
