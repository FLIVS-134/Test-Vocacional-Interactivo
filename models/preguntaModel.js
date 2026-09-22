const db = require("../config/database");

// ==========================================
// OBTENER TODAS LAS PREGUNTAS
// ==========================================

async function obtenerPreguntas() {

    const [filas] = await db.query(
        `
        SELECT *
        FROM preguntas
        ORDER BY id_pregunta DESC
        `
    );

    return filas;
}


// ==========================================
// OBTENER PREGUNTA POR ID
// ==========================================

async function obtenerPreguntaPorId(id) {

    const [filas] = await db.query(
        `
        SELECT *
        FROM preguntas
        WHERE id_pregunta = ?
        `,
        [id]
    );

    return filas[0];
}


// ==========================================
// CREAR PREGUNTA
// ==========================================

async function crearPregunta(
    pregunta,
    idCategoria = 1
) {

    const [resultado] = await db.query(
        `
        INSERT INTO preguntas
        (pregunta, id_categoria, estado)
        VALUES (?, ?, ?)
        `,
        [
            pregunta,
            Number(idCategoria),
            "activo"
        ]
    );

    return resultado.insertId;
}


// ==========================================
// ACTUALIZAR PREGUNTA
// ==========================================

async function actualizarPregunta(
    id,
    pregunta,
    idCategoria
) {

    if (idCategoria !== undefined) {

        const [resultado] = await db.query(
            `
            UPDATE preguntas
            SET
                pregunta = ?,
                id_categoria = ?
            WHERE id_pregunta = ?
            `,
            [
                pregunta,
                Number(idCategoria),
                id
            ]
        );

        return resultado;
    }


    const [resultado] = await db.query(
        `
        UPDATE preguntas
        SET pregunta = ?
        WHERE id_pregunta = ?
        `,
        [
            pregunta,
            id
        ]
    );

    return resultado;
}


// ==========================================
// ELIMINAR PREGUNTA
// ==========================================

async function eliminarPregunta(id) {

    const [resultado] = await db.query(
        `
        DELETE FROM preguntas
        WHERE id_pregunta = ?
        `,
        [id]
    );

    return resultado;
}


// ==========================================
// EXPORTAR
// ==========================================

module.exports = {
    obtenerPreguntas,
    obtenerPreguntaPorId,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta
};