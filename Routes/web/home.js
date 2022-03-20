var express = require('express');

var router = express.Router();

router.get("/", function(req,res){
    console.log("Render de index funcionou!")
    res.render("Home/index");
})

module.exports = router;