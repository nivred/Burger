// Import express and assign to router
var express = require('express');
var router = express.Router();

// Use burger model
var burgers = require('../models/burgers.js');

// Create routes
// GET request
router.get("/", function(req, res) {
	burgers.all(function(data) {
        // Handlebars Object
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
// POST request
router.post("/", function(req, res) {
	burgers.create([
		"burger_name", "devoured"
	], [
		req.body.name, req.body.devoured
	], function() {
		res.redirect("/");
	});
});
// PUT request
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	burgers.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Export server.js
module.exports = router;