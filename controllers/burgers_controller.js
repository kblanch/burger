//import express
var express = require('express');

//import burger.js
var burger = require("../models/burger.js");

//create router
var router = express.Router();

router.get("/", function (request, response){
    burger.selectAll(function(data){
        var allObjects = {
            burgers: data
        };
        response.render("index", allObjects);
    });
});

router.post("/", function(request, response){
    burger.insertOne([
        "burger_name", "devoured"
    ],
    [
        request.body.name, request.body.devoured
    ], function() {
        response.redirect("/");
    });
});

router.put("/:id", function(request, response){
    var condition = "id = " + request.params.id;

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function(){
        response.redirect("/");
    });
});
//export router
module.exports = router;