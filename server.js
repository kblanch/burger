var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

//Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import Routes
var routes = require("./controllers/burgers_controller.js");
//Give Server Access to routes
app.use("/", routes);

app.listen(PORT);
