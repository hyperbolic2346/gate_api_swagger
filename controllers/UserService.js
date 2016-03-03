'use strict';
var mysql  = require('../lib/MysqlLib');
var config = require('config');
var jwt    = require('jsonwebtoken');

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.loginUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * password (String)
  **/
  
  if (!args.username.value || !args.password.value) {
    res.end('Invalid call!');
    return;
  }

  var con = mysql.connect();

//  var crypto = require('crypto');
//  var md5_pw_hash = crypto.createHash('md5').update(args.password.value).digest("hex");

  //con.query('SELECT * from users WHERE username = "' + args.username.value + '" AND password = "' + md5_pw_hash + '"', function (err, rows, fields) {
  var query = con.query('SELECT * from users WHERE username = "' + con.escape(args.username.value) + '" AND password = "' + con.escape(args.password.value) + '"', function (err, rows, fields) {
    if (err || rows.length == 0) {
      res.end('Invalid user information!');
      console.log('invalid query ' + query.sql);
      return;
    }

console.log(rows);

    var user_obj = {
      id: rows[0].user_id,
      username: rows[0].username,
      firstName: 'unknown',
      lastName: 'unknown',
      email: 'unknown',
      display_name: rows[0].display_name,
      auth_token: jwt.sign({ user_id: rows[0].user_id}, config.get('secret'), {
          expiresIn: 1440 * 60 // expires in 24 hours
        })
     };

     res.setHeader('Content-Type', 'application/json');
     res.end(JSON.stringify(user_obj, null, 2));
  });
}

exports.logoutUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  
  // currently don't store the tokens, so can't invalidate them. Is it cool to just let the client
  // forget the token? 
  res.end();
}

exports.getUserByName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstName" : "aeiou",
  "lastName" : "aeiou",
  "password" : "aeiou",
  "userStatus" : 123,
  "phone" : "aeiou",
  "id" : 123456789,
  "display_name" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * body (User)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

