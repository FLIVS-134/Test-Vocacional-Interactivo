const express = require("express");

const router = express.Router();

const {
    registrar,
    login,
    logout
} = require("../controllers/authController");


router.post("/registro", registrar);

router.post("/login", login);

router.get("/logout", logout);

router.get("/sesion", (req, res) => {

    if (!req.session.usuario) {

        return res.status(401).json({
            autenticado: false
        });

    }

    res.json({
        autenticado: true,
        usuario: req.session.usuario
    });

});

module.exports = router;