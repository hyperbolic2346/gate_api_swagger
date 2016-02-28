'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getGateById = function getGateById (req, res, next) {
  Default.getGateById(req.swagger.params, res, next);
};
