const db = require("../config/database");

async function obtenerCarreras() {

const [filas] = await db.query(
    `SELECT 
        c.*,
        a.nombre AS nombre_area
     FROM carreras c
     LEFT JOIN areas a
        ON c.id_area = a.id_area
     ORDER BY c.id_carrera ASC`
);

return filas;

}

async function obtenerCarreraPorId(id) {

const [filas] = await db.query(
    `SELECT 
        c.*,
        a.nombre AS nombre_area
     FROM carreras c
     LEFT JOIN areas a
        ON c.id_area = a.id_area
     WHERE c.id_carrera = ?`,
    [id]
);

return filas[0];

}

async function crearCarrera(
nombre,
descripcion,
idArea
) {

const [resultado] = await db.query(
    `INSERT INTO carreras
    (nombre, descripcion, id_area)
    VALUES (?, ?, ?)`,
    [
        nombre,
        descripcion,
        idArea
    ]
);

return resultado.insertId;

}

async function actualizarCarrera(
id,
nombre,
descripcion,
idArea
) {

const [resultado] = await db.query(
    `UPDATE carreras
     SET nombre = ?,
         descripcion = ?,
         id_area = ?
     WHERE id_carrera = ?`,
    [
        nombre,
        descripcion,
        idArea,
        id
    ]
);

return resultado;

}

async function eliminarCarrera(id) {

const [resultado] = await db.query(
    "DELETE FROM carreras WHERE id_carrera = ?",
    [id]
);

return resultado;

}

module.exports = {
obtenerCarreras,
obtenerCarreraPorId,
crearCarrera,
actualizarCarrera,
eliminarCarrera
};