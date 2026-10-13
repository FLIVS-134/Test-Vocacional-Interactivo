const db = require("../config/database");

// ==========================================
// CREAR RESULTADO
// ==========================================

async function crearResultado(idUsuario) {

const [resultado] = await db.query(
    `
    INSERT INTO resultados
    (id_usuario, fecha)
    VALUES (?, NOW())
    `,
    [idUsuario]
);

return resultado.insertId;

}

// ==========================================
// GUARDAR RESPUESTA
// ==========================================

async function guardarRespuesta(
idResultado,
idPregunta,
respuesta
) {

const [resultado] = await db.query(
    `
    INSERT INTO respuestas
    (id_resultado, id_pregunta, respuesta)
    VALUES (?, ?, ?)
    `,
    [
        idResultado,
        idPregunta,
        respuesta
    ]
);

return resultado.insertId;

}

// ==========================================
// OBTENER RESULTADO POR ID
// ==========================================

async function obtenerResultadoPorId(idResultado) {

const [filas] = await db.query(
    `
    SELECT
        r.id_resultado,
        r.id_usuario,
        r.fecha
    FROM resultados r
    WHERE r.id_resultado = ?
    `,
    [idResultado]
);

return filas[0];

}

// ==========================================
// OBTENER RESULTADOS DE UN USUARIO
// ==========================================

async function obtenerResultadosPorUsuario(idUsuario) {

const [filas] = await db.query(
    `
    SELECT
        r.id_resultado,
        r.id_usuario,
        r.fecha
    FROM resultados r
    WHERE r.id_usuario = ?
    ORDER BY r.fecha DESC
    `,
    [idUsuario]
);

return filas;

}

// ==========================================
// OBTENER RESPUESTAS DE UN RESULTADO
// ==========================================

async function obtenerRespuestasPorResultado(idResultado) {

const [filas] = await db.query(
    `
    SELECT
        rp.id_respuesta,
        rp.id_resultado,
        rp.id_pregunta,
        rp.respuesta,
        p.pregunta
    FROM respuestas rp
    INNER JOIN preguntas p
        ON rp.id_pregunta = p.id_pregunta
    WHERE rp.id_resultado = ?
    ORDER BY rp.id_respuesta ASC
    `,
    [idResultado]
);

return filas;

}

// ==========================================
// EXPORTAR
// ==========================================

module.exports = {

crearResultado,

guardarRespuesta,

obtenerResultadoPorId,

obtenerResultadosPorUsuario,

obtenerRespuestasPorResultado

};