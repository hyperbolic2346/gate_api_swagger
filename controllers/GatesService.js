'use strict';

exports.getGates = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "held" : "aeiou",
  "gate_id" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou",
  "status_changed" : "2016-02-28T07:21:03.740+0000",
  "status" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

