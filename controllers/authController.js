const bcrypt = require("bcrypt");

const usuarioModel = require("../models/usuarioModel");


const registrar = async (req, res) => {

    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {

        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });

    }

    try {

        const usuarioExistente =
            await new Promise((resolve, reject) => {

                usuarioModel.buscarPorCorreo(
                    correo,
                    (error, resultados) => {

                        if (error) {
                            reject(error);
                        } else {
                            resolve(resultados);
                        }

                    }
                );

            });

        if (usuarioExistente.length > 0) {

            return res.status(400).json({
                mensaje: "El correo ya está registrado"
            });

        }

        const passwordEncriptada =
            await bcrypt.hash(password, 10);

        usuarioModel.crearUsuario(
            nombre,
            correo,
            passwordEncriptada,
            (error) => {

                if (error) {

                    console.log(error);

                    return res.status(500).json({
                        mensaje: "Error al registrar usuario"
                    });

                }

                res.json({
                    mensaje: "Usuario registrado correctamente"
                });

            }
        );

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }
};


const login = (req, res) => {

    const { correo, password } = req.body;

    if (!correo || !password) {

        return res.status(400).json({
            mensaje: "Correo y contraseña son obligatorios"
        });

    }

    usuarioModel.buscarPorCorreo(
        correo,
        async (error, resultados) => {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    mensaje: "Error del servidor"
                });

            }

            if (resultados.length === 0) {

                return res.status(401).json({
                    mensaje: "Correo o contraseña incorrectos"
                });

            }

            const usuario = resultados[0];

            const passwordCorrecta =
                await bcrypt.compare(
                    password,
                    usuario.password
                );

            if (!passwordCorrecta) {

                return res.status(401).json({
                    mensaje: "Correo o contraseña incorrectos"
                });

            }

            req.session.usuario = {
                id: usuario.id_usuario,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol
            };

            res.json({
                mensaje: "Inicio de sesión exitoso",
                usuario: req.session.usuario
            });

        }
    );
};


const logout = (req, res) => {

    req.session.destroy(() => {

        res.json({
            mensaje: "Sesión cerrada correctamente"
        });

    });

};


module.exports = {
    registrar,
    login,
    logout
};