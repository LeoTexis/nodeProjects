import mongoose from "mongoose"
import RootError from "../errors/rootErrors.js"
import ReqFailure from "../errors/reqError.js"
import ValidationError from "../errors/validationError.js"
import NotFound from "../errors/notFound.js"

function errorHandlers (err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        new ReqFailure().sendResponse(res)
    } else if(err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendResponse(res)
    } else if (err instanceof NotFound) {
        err.sendResponse(res)
    } else {
        new RootError().sendResponse(res)
    }
}

export default errorHandlers