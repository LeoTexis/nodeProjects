import mongoose from "mongoose";

const { Schema } = mongoose

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
        required: true
    },
    image: {
        type: String,
    },
})

const profile = mongoose.model("aluminum", profileSchema)

export default profile