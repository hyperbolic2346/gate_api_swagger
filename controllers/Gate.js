'use strict';

var url = require('url');


var Gate = require('./GateService');


module.exports.holdGate = function holdGate (req, res, next) {
  Gate.holdGate(req.swagger.params, res, next);
};

module.exports.openGate = function openGate (req, res, next) {
  Gate.openGate(req.swagger.params, res, next);
};

module.exports.unholdGate = function unholdGate (req, res, next) {
  Gate.unholdGate(req.swagger.params, res, next);
};
