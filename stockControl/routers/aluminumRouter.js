import express from "express"
import ProfileController from "../src/controllers/aluminumControlle.js"


const routes = express.Router()

routes.get("/", ProfileController.listOfProfile)
routes.get("/search", ProfileController.acessProfileByQuery)
routes.get("/:id", ProfileController.acessProfileById)
routes.post("/", ProfileController.registerProfile)
routes.put("/:id", ProfileController.updateProfile)
routes.delete("/:id", ProfileController.deleteProfile)


export default routes