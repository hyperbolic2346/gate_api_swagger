'use strict';

var mysql      = require('mysql');
var connection;

exports.connect = function() {
  
  var connection = mysql.createConnection({
    host     : '10.0.1.19',
    user     : 'motion',
    password : 'zTpvxKUFCYTGEZc7',
    database : 'motion'
  });

  connection.connect();
  
  return connection;
}

