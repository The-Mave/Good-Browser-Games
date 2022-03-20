var express = require('express');

var router = express.Router();

//TODO : FAZER UMA ROTA DE EXCEPTION (ERRO)

router.use("/", require("./home"));

router.use("/", require("./admin"));

module.exports = router;
