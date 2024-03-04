//mongodb+srv://leonardoleitetx:<password>@cluster0.sfifxsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";
import "dotenv/config"

async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("Database connected!")
    } catch (error) {
        console.error(`Erro: ${error}`)
    }
} 

export default dbConnect()