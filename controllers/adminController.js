const preguntaModel =
require("../models/preguntaModel");

const categoriaModel =
require("../models/categoriaModel");

// ==========================================
// LISTAR PREGUNTAS
// ==========================================

const listarPreguntas = async (req, res) => {

try {

    const preguntas =
        await preguntaModel.obtenerPreguntas();

    res.json(preguntas);

} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error al obtener preguntas"
    });

}

};

// ==========================================
// LISTAR CATEGORÍAS
// ==========================================

const listarCategorias = async (req, res) => {

try {

    const categorias =
        await categoriaModel.obtenerCategorias();

    res.json(categorias);

} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error al obtener categorías"
    });

}

};

// ==========================================
// CREAR PREGUNTA
// ==========================================

const crearPregunta = async (req, res) => {

try {

    const {
        pregunta,
        id_categoria
    } = req.body;


    if (
        !pregunta ||
        pregunta.trim() === ""
    ) {

        return res.status(400).json({
            mensaje: "La pregunta es obligatoria"
        });

    }


    if (!id_categoria) {

        return res.status(400).json({
            mensaje: "La categoría es obligatoria"
        });

    }


    const id =
        await preguntaModel.crearPregunta(
            pregunta.trim(),
            id_categoria
        );


    res.json({
        mensaje: "Pregunta creada correctamente",
        id: id
    });


} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error al crear pregunta"
    });

}

};

// ==========================================
// ACTUALIZAR PREGUNTA
// ==========================================

const actualizarPregunta = async (req, res) => {

try {

    const { id } = req.params;

    const {
        pregunta,
        id_categoria
    } = req.body;


    if (
        !pregunta ||
        pregunta.trim() === ""
    ) {

        return res.status(400).json({
            mensaje: "La pregunta es obligatoria"
        });

    }


    if (!id_categoria) {

        return res.status(400).json({
            mensaje: "La categoría es obligatoria"
        });

    }


    await preguntaModel.actualizarPregunta(
        id,
        pregunta.trim(),
        id_categoria
    );


    res.json({
        mensaje: "Pregunta actualizada correctamente"
    });


} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error al actualizar pregunta"
    });

}

};

// ==========================================
// ELIMINAR PREGUNTA
// ==========================================

const eliminarPregunta = async (req, res) => {

try {

    const { id } = req.params;


    await preguntaModel.eliminarPregunta(
        id
    );


    res.json({
        mensaje: "Pregunta eliminada correctamente"
    });


} catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error al eliminar pregunta"
    });

}

};

// ==========================================
// EXPORTAR
// ==========================================

const listarCarreras = async (req, res) => {
    try {
        const [carreras] = await require("../config/database").query(`
            SELECT
                c.id_carrera,
                c.nombre,
                c.descripcion,
                c.id_categoria,
                cat.nombre AS categoria
            FROM carreras c
            LEFT JOIN categorias cat
                ON c.id_categoria = cat.id_categoria
            ORDER BY c.id_carrera ASC
        `);

        res.json(carreras);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener carreras"
        });

    }
};

// ==========================================
// LISTAR USUARIOS
// ==========================================

const listarUsuarios = async (req, res) => {

    try {

        const db =
            require("../config/database");

        const [usuarios] =
            await db.query(`
                SELECT
                    u.id_usuario,
                    u.nombre,
                    u.correo,
                    u.id_rol,
                    r.nombre AS rol
                FROM usuarios u
                LEFT JOIN roles r
                    ON u.id_rol = r.id_rol
                ORDER BY u.id_usuario ASC
            `);

        res.json(usuarios);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener usuarios"
        });

    }

};

module.exports = {

    listarPreguntas,
    listarCategorias,
    listarCarreras,
    listarUsuarios,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta

};
