const db = require("../config/database");

async function obtenerOpciones() {

const [filas] = await db.query(
    `SELECT 
        o.*,
        p.pregunta
     FROM opciones o
     LEFT JOIN preguntas p
        ON o.id_pregunta = p.id_pregunta
     ORDER BY o.id_opcion ASC`
);

return filas;

}

async function obtenerOpcionesPorPregunta(
idPregunta
) {

const [filas] = await db.query(
    `SELECT *
     FROM opciones
     WHERE id_pregunta = ?
     ORDER BY id_opcion ASC`,
    [idPregunta]
);

return filas;

}

async function obtenerOpcionPorId(id) {

const [filas] = await db.query(
    `SELECT *
     FROM opciones
     WHERE id_opcion = ?`,
    [id]
);

return filas[0];

}

async function crearOpcion(
idPregunta,
texto,
valor
) {

const [resultado] = await db.query(
    `INSERT INTO opciones
    (id_pregunta, texto, valor)
    VALUES (?, ?, ?)`,
    [
        idPregunta,
        texto,
        valor
    ]
);

return resultado.insertId;

}

async function actualizarOpcion(
id,
texto,
valor
) {

const [resultado] = await db.query(
    `UPDATE opciones
     SET texto = ?,
         valor = ?
     WHERE id_opcion = ?`,
    [
        texto,
        valor,
        id
    ]
);

return resultado;

}

async function eliminarOpcion(id) {

const [resultado] = await db.query(
    "DELETE FROM opciones WHERE id_opcion = ?",
    [id]
);

return resultado;

}

module.exports = {
obtenerOpciones,
obtenerOpcionesPorPregunta,
obtenerOpcionPorId,
crearOpcion,
actualizarOpcion,
eliminarOpcion
};