import express from "express"
import donorController from "../controllers/donorController.js"
import { verifyAuthorization } from "../middlewares/verification.js"

const router = express.Router()

router.post("/createDonor", verifyAuthorization, donorController.createDonor)

router.get("/allDonors", donorController.getAllDonors)
router.get("/getDonor/:id", donorController.getOneDonor)
router.get("/stats", donorController.donorStatistics)

router.put("/updateDonor/:id", donorController.updateDonor)

router.delete("/deleteDonor/:id", donorController.deleteDonor)


export default router