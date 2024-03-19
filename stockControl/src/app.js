import express from "express"
import dbConnect from "../conn.js"
import routes from "../routers/index.js"
import errorHandlers from "./middlewares/errors.js"
import notFoundError from "./middlewares/notFound.js"


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


app.use(notFoundError)
app.use(errorHandlers)

export default app

