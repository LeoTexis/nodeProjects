import express from "express"
import dbConnect from "../conn.js"
<<<<<<< Updated upstream
import profile from "./models/profilesModels.js"
=======
import routes from "../routers/index.js"
import errorHandlers from "./middlewares/errors.js"
>>>>>>> Stashed changes

//dbconnection
dbConnect()



const app = express()

<<<<<<< Updated upstream
export default express()
=======

app.use(errorHandlers)

export default app
>>>>>>> Stashed changes
