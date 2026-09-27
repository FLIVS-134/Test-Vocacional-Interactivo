const db = require("../config/database");

// ==========================================
// MOSTRAR LAS PREGUNTAS Y SUS OPCIONES
// ==========================================

const obtenerPreguntas = async (req, res) => {

    try {

        const [resultados] = await db.query(
            `
            SELECT
                p.id_pregunta,
                p.pregunta,
                p.id_categoria,
                c.nombre AS categoria,
                o.id_opcion,
                o.texto_opcion,
                o.valor
            FROM preguntas p

            INNER JOIN categorias c
                ON p.id_categoria = c.id_categoria

            INNER JOIN opciones o
                ON p.id_pregunta = o.id_pregunta

            WHERE p.estado = 'activo'

            ORDER BY
                p.id_pregunta ASC,
                o.valor ASC
            `
        );


        // ==========================================
        // ORGANIZAR LAS PREGUNTAS
        // ==========================================

        const preguntas = [];


        resultados.forEach((fila) => {

            let pregunta =
                preguntas.find(
                    p => p.id_pregunta === fila.id_pregunta
                );


            if (!pregunta) {

                pregunta = {

                    id_pregunta:
                        fila.id_pregunta,

                    pregunta:
                        fila.pregunta,

                    id_categoria:
                        fila.id_categoria,

                    categoria:
                        fila.categoria,

                    opciones: []

                };


                preguntas.push(pregunta);

            }


            pregunta.opciones.push({

                id_opcion:
                    fila.id_opcion,

                texto_opcion:
                    fila.texto_opcion,

                valor:
                    fila.valor

            });

        });


        res.json(preguntas);


    } catch (error) {

        console.error(
            "Error al obtener preguntas:",
            error
        );


        res.status(500).json({

            mensaje:
                "Error al obtener las preguntas"

        });

    }

};


// ==========================================
// GUARDAR LAS RESPUESTAS DEL TEST
// ==========================================

const guardarRespuestas = async (req, res) => {

    const usuario =
        req.session.usuario;

    const respuestas =
        req.body.respuestas;


    // ==========================================
    // VERIFICAR SESIÓN
    // ==========================================

    if (!usuario) {

        return res.status(401).json({

            mensaje:
                "Debes iniciar sesión para realizar el test"

        });

    }


    // ==========================================
    // VERIFICAR RESPUESTAS
    // ==========================================

    if (
        !respuestas ||
        Object.keys(respuestas).length === 0
    ) {

        return res.status(400).json({

            mensaje:
                "No se recibieron respuestas"

        });

    }


    try {

        // ==========================================
        // OBTENER TODAS LAS RESPUESTAS RECIBIDAS
        // ==========================================

        const respuestasArray =
            Object.entries(respuestas);


        // ==========================================
        // VERIFICAR QUE SE HAYAN RESPONDIDO
        // TODAS LAS PREGUNTAS
        // ==========================================

        const [cantidadPreguntas] =
            await db.query(
                `
                SELECT COUNT(*) AS total
                FROM preguntas
                WHERE estado = 'activo'
                `
            );


        const totalPreguntas =
            cantidadPreguntas[0].total;


        if (
            respuestasArray.length !==
            totalPreguntas
        ) {

            return res.status(400).json({

                mensaje:
                    "Debes responder todas las preguntas antes de finalizar el test"

            });

        }


        // ==========================================
        // OBTENER LAS OPCIONES SELECCIONADAS
        // ==========================================

        const idsOpciones =
            respuestasArray.map(
                ([idPregunta, idOpcion]) =>
                    Number(idOpcion)
            );


        const [opciones] =
            await db.query(
                `
                SELECT
                    o.id_opcion,
                    o.id_pregunta,
                    o.valor,
                    p.id_categoria,
                    c.nombre AS categoria
                FROM opciones o

                INNER JOIN preguntas p
                    ON o.id_pregunta = p.id_pregunta

                INNER JOIN categorias c
                    ON p.id_categoria = c.id_categoria

                WHERE o.id_opcion IN (?)
                `,
                [idsOpciones]
            );


        // ==========================================
        // VERIFICAR QUE TODAS LAS OPCIONES
        // SEAN VÁLIDAS
        // ==========================================

        if (
            opciones.length !==
            respuestasArray.length
        ) {

            return res.status(400).json({

                mensaje:
                    "Se encontraron respuestas inválidas"

            });

        }


        // ==========================================
        // CALCULAR PUNTAJE POR ÁREA
        // ==========================================

        const puntajesCategorias = {};


        opciones.forEach((opcion) => {

            const categoria =
                opcion.id_categoria;


            if (
                !puntajesCategorias[categoria]
            ) {

                puntajesCategorias[categoria] = {

                    id_categoria:
                        categoria,

                    nombre:
                        opcion.categoria,

                    puntaje: 0

                };

            }


            puntajesCategorias[categoria].puntaje +=
                Number(opcion.valor);

        });


        // ==========================================
        // ORDENAR LAS ÁREAS POR PUNTAJE
        // ==========================================

        const categoriasOrdenadas =
            Object.values(
                puntajesCategorias
            ).sort(
                (a, b) =>
                    b.puntaje - a.puntaje
            );


        if (
            categoriasOrdenadas.length === 0
        ) {

            return res.status(400).json({

                mensaje:
                    "No fue posible calcular el resultado"

            });

        }


        // ==========================================
        // ÁREA CON MAYOR PUNTAJE
        // ==========================================

        const categoriaPrincipal =
            categoriasOrdenadas[0];


        // ==========================================
        // BUSCAR CARRERAS DEL ÁREA PRINCIPAL
        // ==========================================

        const [carreras] =
            await db.query(
                `
                SELECT
                    id_carrera,
                    nombre,
                    descripcion,
                    id_categoria
                FROM carreras
                WHERE id_categoria = ?
                ORDER BY nombre ASC
                `,
                [
                    categoriaPrincipal.id_categoria
                ]
            );


        // ==========================================
        // BUSCAR UNIVERSIDADES RELACIONADAS
        // CON LAS CARRERAS RECOMENDADAS
        // ==========================================

        const idsCarreras =
            carreras.map(
                carrera => carrera.id_carrera
            );

        let universidades = [];

        if (idsCarreras.length > 0) {

            const [universidadesResultado] =
                await db.query(
                    `
                    SELECT DISTINCT
                        u.id_universidad,
                        u.nombre,
                        u.ciudad,
                        u.descripcion
                    FROM universidades u

                    INNER JOIN universidad_carreras uc
                        ON u.id_universidad = uc.id_universidad

                    WHERE uc.id_carrera IN (?)

                    ORDER BY u.nombre ASC
                    `,
                    [idsCarreras]
                );

            universidades =
                universidadesResultado;

        }


        // ==========================================
        // GUARDAR LAS RESPUESTAS DEL USUARIO
        // ==========================================

        for (
            const [idPregunta, idOpcion]
            of respuestasArray
        ) {

            await db.query(
                `
                INSERT INTO respuestas
                (
                    id_usuario,
                    id_pregunta,
                    id_opcion
                )
                VALUES (?, ?, ?)
                `,
                [
                    usuario.id,
                    Number(idPregunta),
                    Number(idOpcion)
                ]
            );

        }


        // ==========================================
        // GUARDAR RESULTADOS
        // ==========================================

        for (
            const carrera
            of carreras
        ) {

            await db.query(
                `
                INSERT INTO resultados
                (
                    id_usuario,
                    id_carrera,
                    puntaje
                )
                VALUES (?, ?, ?)
                `,
                [
                    usuario.id,
                    carrera.id_carrera,
                    categoriaPrincipal.puntaje
                ]
            );

        }


        // ==========================================
        // RESPUESTA FINAL
        // ==========================================

        res.json({

            mensaje:
                "Test completado correctamente",

            categoriaPrincipal: {

                id_categoria:
                    categoriaPrincipal.id_categoria,

                nombre:
                    categoriaPrincipal.nombre,

                puntaje:
                    categoriaPrincipal.puntaje

            },

            categorias:
                categoriasOrdenadas,

            carreras:
                carreras,

            universidades:
                universidades

        });


    } catch (error) {

        console.error(
            "Error al guardar respuestas:",
            error
        );


        res.status(500).json({

            mensaje:
                "Error al guardar las respuestas"

        });

    }

};


// ==========================================
// OBTENER RESULTADO GUARDADO DEL USUARIO
// ==========================================

const obtenerResultado = async (req, res) => {

    const usuario = req.session.usuario;

    console.log("USUARIO EN SESIÓN:", usuario);

    if (!usuario) {
        return res.status(401).json({
            mensaje: "Debes iniciar sesión"
        });
    }

    try {

        const [resultados] =
            await db.query(
                `
                SELECT
                    r.id_resultado,
                    r.id_carrera,
                    r.puntaje,
                    c.nombre AS carrera,
                    c.descripcion,
                    c.id_categoria,
                    cat.nombre AS categoria
                FROM resultados r

                INNER JOIN carreras c
                    ON r.id_carrera = c.id_carrera

                LEFT JOIN categorias cat
                    ON c.id_categoria = cat.id_categoria

                WHERE r.id_usuario = ?

                ORDER BY r.id_resultado DESC
                `,
                [usuario.id]
            );


        if (resultados.length === 0) {

            return res.json({
                tieneResultado: false
            });

        }


        const primerResultado =
            resultados[0];


        const carreras =
            resultados.map(
                resultado => ({
                    id_carrera:
                        resultado.id_carrera,

                    nombre:
                        resultado.carrera,

                    descripcion:
                        resultado.descripcion
                })
            );


        // ==========================================
        // BUSCAR UNIVERSIDADES DE LAS CARRERAS
        // DEL RESULTADO GUARDADO
        // ==========================================

        const idsCarreras =
            carreras.map(
                carrera => carrera.id_carrera
            );

        let universidades = [];

        if (idsCarreras.length > 0) {

            const [universidadesResultado] =
                await db.query(
                    `
                    SELECT DISTINCT
                        u.id_universidad,
                        u.nombre,
                        u.ciudad,
                        u.descripcion
                    FROM universidades u

                    INNER JOIN universidad_carreras uc
                        ON u.id_universidad = uc.id_universidad

                    WHERE uc.id_carrera IN (?)

                    ORDER BY u.nombre ASC
                    `,
                    [idsCarreras]
                );

            universidades =
                universidadesResultado;

        }


        res.json({

            tieneResultado: true,

            categoriaPrincipal: {

                id_categoria:
                    primerResultado.id_categoria,

                nombre:
                    primerResultado.categoria,

                puntaje:
                    primerResultado.puntaje

            },

            carreras:
                carreras,

            universidades:
                universidades

        });


    } catch (error) {

        console.error(
            "Error al obtener resultado:",
            error
        );


        res.status(500).json({

            mensaje:
                "Error al obtener el resultado"

        });

    }

};


// ==========================================
// EXPORTAR FUNCIONES
// ==========================================

module.exports = {

    obtenerPreguntas,

    guardarRespuestas,

    obtenerResultado

};