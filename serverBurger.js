var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController");
app.use(routes);

app.listen(PORT, function() {
    console.log("Eat-Da-Burger now listening at localhost:" + PORT);
  });