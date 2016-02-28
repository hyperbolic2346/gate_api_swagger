'use strict';
var config = require('config');
var http = require('http');

exports.getGateById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * gateId (Long)
  **/

  http.request({host: config.get('gate.ip'), path: config.get('gate.gate_url') + args.gateId.value + '/status'}, function(resp) {
    var str = '';

    resp.on('data', function (chunk) {
      str += chunk;
    });

    resp.on('end', function () {
      res.setHeader('Content-Type', 'application/json');
      res.end(str);
    });
  }).end();  
}

