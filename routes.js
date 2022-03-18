var express = require('express');

var router = express.Router();

var path = require('path');

router.get("/", function(req,res){
    console.log("Render de index funcionou!")
    res.render("index");
})


module.exports = router;