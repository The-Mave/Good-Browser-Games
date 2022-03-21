var express = require('express');

var router = express.Router();

// TOOD: Sistema de Login em /admin

// router.get("/admin", function(req,res){
//     console.log("Admin de index funcionou!")
//     res.render("Admin/login");
// })

router.get("/admin/dashboard", function(req,res){
    console.log("Admin de index funcionou!")
    res.render("Admin/index");
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

// EDITOR CRUD


router.get("/admin/jogos/edit/id", function(req,res){
    console.log("Admin de index funcionou!")
    res.render("Admin/jogos_edit");
})

router.get("/admin/categorias/edit/id", function(req,res){
    console.log("Admin de index funcionou!")
    res.render("Admin/categorias_edit");
})

router.get("/admin/usuarios/edit/id", function(req,res){
    console.log("Admin de index funcionou!")
    res.render("Admin/usuarios_edit");
})

module.exports = router;