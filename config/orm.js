//import connection

var connection = require('../config/connection.js');

//CREATE METHODS
var orm = {
    //selectAll()
    selectAll: function(table, callBack){
        var q = "Select * From " + tableInput + ';';
        connection.query(q, function(error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },
    //insertOne()
    insertOne: function(table, column, value, callBack){
        var q = "Insert Into " + table;
        q += " (" + column + ") VALUES ( ? )";


        connection.query(q, values, function(error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },
    //updateOne()
    updateOne: function(table, columnVal, condition, callBack){
        var q = "Update " + table;

        q += 'Set ' + columnVal + ' Where ' + condition; 

        connection.query(q, function(error, result){
            if(error) {
                throw error;
            }
            callBack(result);
        });
    }
}

//export ORM object 
module.exports = orm;