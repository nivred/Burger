// Require mysql
var mysql = require('mysql');

// Setup mysql connection
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "!pS159iS218",
	database: "burgers_db"
});

// Connect to mysql
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

// Export mysql connection
module.exports = connection;