const conexion = require("../config/database");


const obtenerPreguntas = (callback) => {

    const sql = `
        SELECT *
        FROM preguntas
        ORDER BY id_pregunta DESC
    `;

    conexion.query(sql, callback);
};


const obtenerPreguntaPorId = (id, callback) => {

    const sql = `
        SELECT *
        FROM preguntas
        WHERE id_pregunta = ?
    `;

    conexion.query(sql, [id], callback);
};


const crearPregunta = (pregunta, callback) => {

    const sql = `
        INSERT INTO preguntas (pregunta)
        VALUES (?)
    `;

    conexion.query(sql, [pregunta], callback);
};


const actualizarPregunta = (id, pregunta, callback) => {

    const sql = `
        UPDATE preguntas
        SET pregunta = ?
        WHERE id_pregunta = ?
    `;

    conexion.query(
        sql,
        [pregunta, id],
        callback
    );
};


const eliminarPregunta = (id, callback) => {

    const sql = `
        DELETE FROM preguntas
        WHERE id_pregunta = ?
    `;

    conexion.query(sql, [id], callback);
};


module.exports = {
    obtenerPreguntas,
    obtenerPreguntaPorId,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta
};