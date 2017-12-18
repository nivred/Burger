// Require express and burger model
var express = require("express")
var burger = require("../models/burger")
var router = express.Router();
// Create routes
// GET request
router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };

        res.render('index', hbsObject);
    });
});
// POST request
router.post("/api/burgers", function(req, res) {
    var myArray = [];
    myArray.push(req.body.burgerName);
    burger.insertOne("burger_name", myArray, function(result) {
    //   res.json(res);
        res.redirect("/")
    });
});
// PUT request
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne({devoured:1}, "id = " + req.params.id, function(result) {
        res.redirect("/");
    });
});
// Redirect
router.get("/*", function(req, res) {
    res.redirect("/")
});
// Export server.js
module.exports = router