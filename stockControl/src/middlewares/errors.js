import mongoose from "mongoose"
import RootError from "../errors/rootErrors.js"

function errorHandlers (err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({message: `one or more data provided is incorrect`})
    } else if(err instanceof mongoose.Error.ValidationError) {
        const errorMessage = Object.values(err.errors)
            .map(err => err.message)
            .join(`; `)
        res.status(400).send({message: `Data validation error - ${errorMessage}`})
    } else {
        new RootError().sendResponse(res)
    }
}

export default errorHandlers