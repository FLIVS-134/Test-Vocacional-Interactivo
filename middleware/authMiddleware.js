const verificarSesion = (req, res, next) => {

    if (!req.session.usuario) {

        return res.status(401).json({
            mensaje: "Debes iniciar sesión"
        });

    }

    next();
};


const verificarAdmin = (req, res, next) => {

    if (!req.session.usuario) {

        return res.status(401).json({
            mensaje: "Debes iniciar sesión"
        });

    }

    if (req.session.usuario.rol !== "admin") {

        return res.status(403).json({
            mensaje: "No tienes permisos para acceder"
        });

    }

    next();
};


module.exports = {
    verificarSesion,
    verificarAdmin
};