const db = require("../config/database");

async function obtenerAreas() {

const [filas] = await db.query(
    "SELECT * FROM areas ORDER BY id_area ASC"
);

return filas;

}

async function obtenerAreaPorId(id) {

const [filas] = await db.query(
    "SELECT * FROM areas WHERE id_area = ?",
    [id]
);

return filas[0];

}

async function crearArea(nombre, descripcion) {

const [resultado] = await db.query(
    "INSERT INTO areas (nombre, descripcion) VALUES (?, ?)",
    [nombre, descripcion]
);

return resultado.insertId;

}

async function actualizarArea(
id,
nombre,
descripcion
) {

const [resultado] = await db.query(
    "UPDATE areas SET nombre = ?, descripcion = ? WHERE id_area = ?",
    [
        nombre,
        descripcion,
        id
    ]
);

return resultado;

}

async function eliminarArea(id) {

const [resultado] = await db.query(
    "DELETE FROM areas WHERE id_area = ?",
    [id]
);

return resultado;

}

module.exports = {
obtenerAreas,
obtenerAreaPorId,
crearArea,
actualizarArea,
eliminarArea,
};