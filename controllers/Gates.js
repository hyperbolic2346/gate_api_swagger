'use strict';

var url = require('url');


var Gates = require('./GatesService');


module.exports.getGates = function getGates (req, res, next) {
  Gates.getGates(req.swagger.params, res, next);
};
