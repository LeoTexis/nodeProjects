import express from "express"
import ProfileController from "../src/controllers/aluminumControlle.js"

const router = express.Router()

router.get("/", ProfileController.listOfProfile)
router.get("/:id", ProfileController.acessProfileById)
router.post("/", ProfileController.registerProfile)
router.put("/:id", ProfileController.updateProfile)
router.delete("/:id", ProfileController.deleteProfile)

export default router
