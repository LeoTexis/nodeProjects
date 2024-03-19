import RootError from "./rootErrors.js";

class ReqFailure extends RootError {
    constructor( message = `one or more data provided is incorrect`, ) {
        super(message, 400)
    }
}

export default ReqFailure