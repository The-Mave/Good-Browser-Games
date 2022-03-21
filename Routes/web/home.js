var express = require('express');

var router = express.Router();

router.get("/", function(req,res){
    console.log("Render de index funcionou!")
    res.render("Home/index");
})

router.get("/login", function(req,res){
    console.log("Render de index funcionou!")
    res.render("Home/login");
})

router.get("/signup", function(req,res){
    console.log("Render de index funcionou!")
    res.render("Home/signup");
})
module.exports = router;