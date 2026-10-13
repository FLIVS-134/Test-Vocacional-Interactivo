const express = require("express");
const router = express.Router();

const {
    responderFLIVS
} = require("../controllers/flivsController");

router.post("/preguntar", responderFLIVS);

module.exports = router;