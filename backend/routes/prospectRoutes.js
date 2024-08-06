import express from "express"
import prospectController from "../controllers/prospectController.js"

const router = express.Router()

router.post("/createProspect", prospectController.createProspect)

router.get("/allProspects", prospectController.getAllProspects)
router.get("/getProspect/:id", prospectController.getOneProspect)
router.get("/stats", prospectController.prospectStatistics)

router.put("/updateProspect/:id", prospectController.updateProspect)

router.delete("/deleteProspect/:id", prospectController.deleteProspect)


export default router