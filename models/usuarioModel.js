const db = require("../config/database");

// ==========================================
// BUSCAR USUARIO POR CORREO
// ==========================================

async function buscarPorCorreo(correo) {

    const [filas] = await db.query(
        `
        SELECT
            u.id_usuario,
            u.nombre,
            u.correo,
            u.password,
            u.id_rol,
            r.nombre AS rol
        FROM usuarios u
        INNER JOIN roles r
            ON u.id_rol = r.id_rol
        WHERE u.correo = ?
        `,
        [correo]
    );

    return filas;
}


// ==========================================
// CREAR USUARIO
// ==========================================

async function crearUsuario(
    nombre,
    correo,
    password
) {

    const [resultado] = await db.query(
        `
        INSERT INTO usuarios
        (nombre, correo, password, id_rol)
        VALUES (?, ?, ?, 2)
        `,
        [
            nombre,
            correo,
            password
        ]
    );

    return resultado;
}


// ==========================================
// EXPORTAR
// ==========================================

module.exports = {
    buscarPorCorreo,
    crearUsuario
};