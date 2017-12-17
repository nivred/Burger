var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var express = require("express")
var app = express();

// Choose a port number
var PORT = process.env.PORT || 3000;
// Use  express.static middleware to serve static content for app from "public" directory
app.use(express.static("public"));
// Set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
// Set Handlebars as default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
