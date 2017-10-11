//import connection

var connection = require('../config/connection.js');


function objToSql(ob){
    var arr = [];

    for( var key in ob) {
        if(Object.hasOwnProperty.call(ob, key)){
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}



//CREATE METHODS
var orm = {
    //selectAll()
    selectAll: function(table, callBack){
        var q = "Select * From " + table + ';';
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

        q += ' Set ' + objToSql(columnVal);
        q += ' Where ' + condition; 

        console.log(q);

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