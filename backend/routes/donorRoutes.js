import express from "express"
import donorController from "../controllers/donorController.js"
import { verifyAuthorization, verifyToken } from "../middlewares/verification.js"

const router = express.Router()

router.post("/createDonor", /* verifyToken, */ donorController.createDonor)

router.get("/allDonors", donorController.getAllDonors)
router.get("/getDonor/:id", donorController.getOneDonor)
router.get("/stats", donorController.donorStatistics)
router.get("/count", donorController.donorCount)
router.get("/recentDonors", donorController.recentDonors)
router.get("/distribution", donorController.donorDistributionByAgeGroup)


router.put("/updateDonor/:id", donorController.updateDonor)

router.delete("/deleteDonor/:id", donorController.deleteDonor)


export default router