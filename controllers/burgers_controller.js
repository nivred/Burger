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
    console.log("req.body..........\n", req.body);
    burger.insertOne(req.body.burgerName.trim(), function(result) {
    //   res.json(res);
        res.redirect("/")
    });
});
// PUT request
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Redirect
router.get("/*", function(req, res) {
    res.redirect("/")
});
// Export server.js
module.exports = router