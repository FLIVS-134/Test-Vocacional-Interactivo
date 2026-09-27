const express = require("express");

const router = express.Router();

const {
    obtenerPreguntas,
    guardarRespuestas,
    obtenerResultado
} = require("../controllers/testController");


// ==========================================
// OBTENER PREGUNTAS
// ==========================================

router.get(
    "/preguntas",
    obtenerPreguntas
);


// ==========================================
// OBTENER RESULTADO GUARDADO
// ==========================================

router.get(
    "/resultado",
    obtenerResultado
);


// ==========================================
// GUARDAR RESPUESTAS
// ==========================================

router.post(
    "/respuestas",
    guardarRespuestas
);


// ==========================================
// CONFIRMAR QUE LAS RUTAS FUERON CARGADAS
// ==========================================

console.log(
    "✅ TEST ROUTES CARGADO - RUTAS:",
    router.stack.map(
        r => r.route && r.route.path
    )
);


// ==========================================
// EXPORTAR ROUTER
// ==========================================

module.exports = router;
