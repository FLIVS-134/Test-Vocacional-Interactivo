const conexion = require("../config/database");

const buscarPorCorreo = (correo, callback) => {

    const sql = `
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
    `;

    conexion.query(sql, [correo], callback);
};


const crearUsuario = (nombre, correo, password, callback) => {

    const sql = `
        INSERT INTO usuarios
        (nombre, correo, password, id_rol)
        VALUES (?, ?, ?, 1)
    `;

    conexion.query(
        sql,
        [nombre, correo, password],
        callback
    );
};


module.exports = {
    buscarPorCorreo,
    crearUsuario
};