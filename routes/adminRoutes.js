const express = require("express");

const router = express.Router();

const {
    verificarAdmin
} = require("../middleware/authMiddleware");

const {
    listarPreguntas,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta
} = require("../controllers/adminController");


router.get(
    "/panel",
    verificarAdmin,
    (req, res) => {

        res.json({
            mensaje: "Bienvenido al panel de administración",
            usuario: req.session.usuario
        });

    }
);


router.get(
    "/preguntas",
    verificarAdmin,
    listarPreguntas
);


router.post(
    "/preguntas",
    verificarAdmin,
    crearPregunta
);


router.put(
    "/preguntas/:id",
    verificarAdmin,
    actualizarPregunta
);


router.delete(
    "/preguntas/:id",
    verificarAdmin,
    eliminarPregunta
);


module.exports = router;