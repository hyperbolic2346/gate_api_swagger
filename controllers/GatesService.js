'use strict';

exports.getGates = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/

  http.request({host: config.get('gate.ip'), path: config.get('gate.gates_url') + '/status'}, function(resp) {
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

