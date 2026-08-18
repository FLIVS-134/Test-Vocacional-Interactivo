const preguntaModel =
    require("../models/preguntaModel");


const listarPreguntas = (req, res) => {

    preguntaModel.obtenerPreguntas(
        (error, resultados) => {

            if (error) {

                console.error(error);

                return res.status(500).json({
                    mensaje: "Error al obtener preguntas"
                });

            }

            res.json(resultados);
        }
    );
};


const crearPregunta = (req, res) => {

    const { pregunta } = req.body;

    if (!pregunta || pregunta.trim() === "") {

        return res.status(400).json({
            mensaje: "La pregunta es obligatoria"
        });

    }

    preguntaModel.crearPregunta(
        pregunta,
        (error, resultado) => {

            if (error) {

                console.error(error);

                return res.status(500).json({
                    mensaje: "Error al crear pregunta"
                });

            }

            res.json({
                mensaje: "Pregunta creada correctamente",
                id: resultado.insertId
            });

        }
    );
};


const actualizarPregunta = (req, res) => {

    const { id } = req.params;
    const { pregunta } = req.body;

    if (!pregunta || pregunta.trim() === "") {

        return res.status(400).json({
            mensaje: "La pregunta es obligatoria"
        });

    }

    preguntaModel.actualizarPregunta(
        id,
        pregunta,
        (error) => {

            if (error) {

                console.error(error);

                return res.status(500).json({
                    mensaje: "Error al actualizar pregunta"
                });

            }

            res.json({
                mensaje: "Pregunta actualizada correctamente"
            });

        }
    );
};


const eliminarPregunta = (req, res) => {

    const { id } = req.params;

    preguntaModel.eliminarPregunta(
        id,
        (error) => {

            if (error) {

                console.error(error);

                return res.status(500).json({
                    mensaje: "Error al eliminar pregunta"
                });

            }

            res.json({
                mensaje: "Pregunta eliminada correctamente"
            });

        }
    );
};


module.exports = {
    listarPreguntas,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta
};