'use strict';
var config = require('config');
var http = require('http');
var mysql  = require('../lib/MysqlLib');

exports.holdGate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * gateId (String)
  **/
  
  // they want to hold the gate
  http.request({host: config.get('gate.ip'), path: config.get('gate.gate_url') + args.gateId.value + '/hold'}, function(resp) {
    var str = '';

    resp.on('data', function (chunk) {
      str += chunk;
    });

    resp.on('end', function () {
      var mysql_con = mysql.connect();
      mysql_con.query('INSERT into event_log set user_id = "' + args.user_data.user_id + '", event_type = "' + (args.gateId.value == 0 ? '2' : '5') + '"',
      function(err, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.end(str);
      });
    });
  }).end();
}

exports.openGate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * gateId (String)
  **/
  
  // they want to open the gate
  http.request({host: config.get('gate.ip'), path: config.get('gate.gate_url') + args.gateId.value + '/open'}, function(resp) {
    var str = '';

    resp.on('data', function (chunk) {
      str += chunk;
    });

    resp.on('end', function () {
      var mysql_con = mysql.connect();
      mysql_con.query('INSERT into event_log set user_id = "' + args.user_data.user_id + '", event_type = "' + (args.gateId.value == 0 ? '1' : '4') + '"',
      function(err, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.end(str);
      });
    });
  }).end();
}

exports.unholdGate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * gateId (String)
  **/
  
  // they want to hold the gate
  http.request({host: config.get('gate.ip'), path: config.get('gate.gate_url') + args.gateId.value + '/unhold'}, function(resp) {
    var str = '';

    resp.on('data', function (chunk) {
      str += chunk;
    });

    resp.on('end', function () {
      var mysql_con = mysql.connect();
      mysql_con.query('INSERT into event_log set user_id = "' + args.user_data.user_id + '", event_type = "' + (args.gateId.value == 0 ? '3' : '6') + '"',
      function(err, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.end(str);
      });
    });
  }).end();
}

