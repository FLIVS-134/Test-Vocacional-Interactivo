const express = require("express");

const router = express.Router();

const {
    verificarAdmin
} = require("../middleware/authMiddleware");

const {
    listarPreguntas,
    listarCategorias,
    listarCarreras,
    listarUsuarios,
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta
} = require("../controllers/adminController");

// ==========================================
// PANEL
// ==========================================

router.get(
    "/panel",
    verificarAdmin,
    (req, res) => {

        res.json({
            mensaje:
                "Bienvenido al panel de administración",

            usuario:
                req.session.usuario
        });

    }
);


// ==========================================
// CATEGORÍAS / ÁREAS
// ==========================================

router.get(
    "/categorias",
    verificarAdmin,
    listarCategorias
);


// ==========================================
// CARRERAS
// ==========================================

router.get(
    "/carreras",
    verificarAdmin,
    listarCarreras
);


// ==========================================
// USUARIOS
// ==========================================

router.get(
    "/usuarios",
    verificarAdmin,
    listarUsuarios
);
// ==========================================
// PREGUNTAS
// ==========================================

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


console.log(
    "✅ ADMIN ROUTES CARGADAS:",
    router.stack
        .filter(r => r.route)
        .map(r => r.route.path)
);

console.log("🔥 RUTA USUARIOS REALMENTE REGISTRADA");

module.exports = router;

