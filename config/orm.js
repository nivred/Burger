// Require connection.js
var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err;
            } 
                cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        console.log("values\n......" + "\n" + table + "\n" + col + "\n" + val + "\n" + cb );
        var queryString = "INSERT INTO ?? (??) VALUES (??)";
//        INSERT INTO burgers (burger_name, devoured) VALUES ("Juicy Goosey Turkey", 1);
  
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) {
                console.log(this.sql);
                throw err;
            }
                cb(result);
        });
    },
    updateOne: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, objColval, condition], function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
};

module.exports = orm;