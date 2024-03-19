import RootError from "./rootErrors.js";

class NotFound extends RootError {
    constructor(){
        super(`Page not found`, 404)
    }
}

export default NotFound