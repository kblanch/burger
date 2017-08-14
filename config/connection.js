//Setup the code to connect Node to MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(error){
    if(error){
        throw error;
    }
});

//Export Connection
module.exports = connection;