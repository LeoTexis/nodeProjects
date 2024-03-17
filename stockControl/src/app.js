import express from "express"
import dbConnect from "../conn.js"
import routes from "../routers/index.js"

//dbconnection
dbConnect()




const app = express()
app.use(express.json())
routes(app)

export default app