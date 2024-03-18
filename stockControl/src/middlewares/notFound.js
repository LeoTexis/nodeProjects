import NotFound from "../errors/notFound.js"

function notFoundError(req, res, next) {
    const error404 = new NotFound()
    next(error404)
}

export default notFoundError