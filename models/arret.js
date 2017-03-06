var db = require('db');
var assert = require('assert');


exports.all = function(cb) {
  var collection = db.get().collection('arret');
  collection.find({} , {_id: 0}).toArray(function(err, docs) {
    assert.equal(err, null);
    cb(null,docs);
  });
}

exports.getById = function(id, cb) {
  var collection = db.get().collection('arret');
  collection.find({'id': id}, {_id: 0}).toArray(function(err, docs) {
    if (err) cb('404', err)
    cb(null, docs);
  })
}
