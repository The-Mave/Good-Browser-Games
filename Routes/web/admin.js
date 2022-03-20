var express = require('express');

var router = express.Router();

router.get("/admin", function(req,res){
    console.log("Admin de index funcionou!")
    res.render("Admin/home");
})
router.get("/admin/jogos", function(req,res){
    console.log("Jogos de index funcionou!")
    res.render("Admin/jogos");
})

router.get("/admin/categorias", function(req,res){
    console.log("Jogos de index funcionou!")
    res.render("Admin/categorias");
})
router.get("/admin/usuarios", function(req,res){
    console.log("Jogos de index funcionou!")
    res.render("Admin/usuarios");
})

module.exports = router;