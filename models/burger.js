//import orm.js
var orm = require("../config/orm.js");

//call orm functions
var burger = {
    selectAll: function(callBack){
        orm.selectAll("burgers", function(response){
            callBack(response);
        });
    },
    insertOne: function(columns, values, callBack){
        orm.insertOne("burgers", columns, values, function(response){
            callBack(response);
        });
    },
    updateOne: function(values, condition, callBack){
        orm.updateOne("burgers", values, condition, function(response){
            callBack(response);
        });
    }
}

//export
module.exports = burger;
