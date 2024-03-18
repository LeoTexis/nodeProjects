import ReqFailure from "./reqError.js";

class ValidationError extends ReqFailure {
    constructor(err){
        const errorMessage = Object.values(err.errors)
            .map(err => err.message)
            .join(`; `)
        super(`Data validation error - ${errorMessage}`)
    }
}

export default ValidationError