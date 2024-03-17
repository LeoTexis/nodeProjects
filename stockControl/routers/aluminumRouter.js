import express from "express"
import ProfileController from "../src/controllers/aluminumControlle.js"

const router = express.Router()

router.get("/", ProfileController.listOfProfile)
router.post("/", ProfileController.registerProfile)

export default router