import mongoose from "mongoose";
import { Schema } from "mongoose";


const profileSchema = new Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    codes: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    min: {
        type: String,
    },
    linearWeight: {
        type: String,
    },
    length: {
        type: String,
    },
    image: {
        type: String,
    },
}, { versionKey: false})

const profile = mongoose.model("aluminums", profileSchema)

export default profile