// Dependencies
var mysql = require('mysql');
var connection; 

// Setup JAWSDB connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	// Setup mysql connection
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "!pS159iS218",
		database: "burgers_db"
	});
}

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