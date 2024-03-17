import express from "express"
import dbConnect from "../conn.js"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import profile from "./models/profilesModels.js"
=======
import routes from "../routers/index.js"
import errorHandlers from "./middlewares/errors.js"
>>>>>>> Stashed changes
=======
import routes from "../routers/index.js"
>>>>>>> Stashed changes

//dbconnection
const conexao = await dbConnect()

conexao.on("error", (err)=>{
    console.error("Conection error", err)
})

conexao.once("open", ()=>{
    console.log("db connected!")
})


const app = express()
app.use(express.json())
routes(app)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default express()
=======

app.use(errorHandlers)

export default app
>>>>>>> Stashed changes
=======
export default app
>>>>>>> Stashed changes
