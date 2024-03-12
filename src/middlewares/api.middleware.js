function entradasMDW(req, res, next) {
    if (req.params || req.query) {
        req.verificador = true
    } else {
        req.verificador = false
    }

    next();
}

export default entradasMDW;