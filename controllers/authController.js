const bcrypt = require("bcrypt");

const usuarioModel =
require("../models/usuarioModel");

// ==========================================
// REGISTRAR USUARIO
// ==========================================

const registrar = async (req, res) => {

const {
    nombre,
    correo,
    password
} = req.body;


if (
    !nombre ||
    !correo ||
    !password
) {

    return res.status(400).json({
        mensaje:
            "Todos los campos son obligatorios"
    });

}


try {

    const usuarioExistente =
        await usuarioModel.buscarPorCorreo(
            correo
        );


    if (
        usuarioExistente.length > 0
    ) {

        return res.status(400).json({
            mensaje:
                "El correo ya está registrado"
        });

    }


    const passwordEncriptada =
        await bcrypt.hash(
            password,
            10
        );


    await usuarioModel.crearUsuario(
        nombre,
        correo,
        passwordEncriptada
    );


    res.json({
        mensaje:
            "Usuario registrado correctamente"
    });


} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje:
            "Error al registrar usuario"
    });

}

};

// ==========================================
// INICIAR SESIÓN
// ==========================================

const login = async (req, res) => {

const {
    correo,
    password
} = req.body;


if (
    !correo ||
    !password
) {

    return res.status(400).json({
        mensaje:
            "Correo y contraseña son obligatorios"
    });

}


try {

    const resultados =
        await usuarioModel.buscarPorCorreo(
            correo
        );


    if (
        resultados.length === 0
    ) {

        return res.status(401).json({
            mensaje:
                "Correo o contraseña incorrectos"
        });

    }


    const usuario =
        resultados[0];


    const passwordCorrecta =
        await bcrypt.compare(
            password,
            usuario.password
        );


    if (!passwordCorrecta) {

        return res.status(401).json({
            mensaje:
                "Correo o contraseña incorrectos"
        });

    }


    req.session.usuario = {

        id: usuario.id_usuario,

        nombre: usuario.nombre,

        correo: usuario.correo,

        rol: usuario.rol

    };


    res.json({

        mensaje:
            "Inicio de sesión exitoso",

        usuario:
            req.session.usuario

    });


} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje:
            "Error del servidor"
    });

}

};

// ==========================================
// CERRAR SESIÓN
// ==========================================

const logout = (req, res) => {

req.session.destroy((error) => {

    if (error) {

        console.error(error);

        return res.status(500).json({
            mensaje:
                "Error al cerrar sesión"
        });

    }


    res.json({
        mensaje:
            "Sesión cerrada correctamente"
    });

});

};

// ==========================================
// EXPORTAR
// ==========================================

module.exports = {

registrar,

login,

logout

};