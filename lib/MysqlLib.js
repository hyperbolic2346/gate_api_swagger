'use strict';
var config = require('config');
var mysql  = require('mysql');
var connection;

exports.connect = function() {
  
  var connection = mysql.createConnection({
    host     : config.get('dbConfig.host'),
    user     : config.get('dbConfig.user'),
    password : config.get('dbConfig.password'),
    database : config.get('dbConfig.dbName')
  });

  connection.connect();
  
  return connection;
}

