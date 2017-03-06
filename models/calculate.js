var db = require('db');
var assert = require('assert');

exports.time = function(route, cb) {
  cb(null,{'time': parseInt(route.beginTime,10) + Math.floor(Math.random() * (20 - 3) + 3)});
}
