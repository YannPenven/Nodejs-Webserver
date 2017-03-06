var db = require('db');
var assert = require('assert');


exports.getHome = function(username, cb) {
  /*db.get().fetch({username:username}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0])
  })*/
  var collection = db.get().collection('user');
  collection.find({'username':username}).toArray(function(err, docs) {
    assert.equal(err, null);
    if(typeof variable === 'undefined' || variable === null ){
      return cb('400',null);
    }
    var collectionStop = db.get().collection('arret');
    collectionStop.find({'id':docs[0].home}, { _id: 0, id: 0 }).toArray(function(err, docsArret) {
      assert.equal(err, null);
      cb(null,docsArret);
    })
  });
}

exports.getWork = function(username, cb) {
  /*db.get().fetch({username:username}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0])
  })*/
  var collection = db.get().collection('user');
  collection.find({'username': username}).toArray(function(err, docs) {
    assert.equal(err, null);
    if(typeof variable === 'undefined' || variable === null ){
      return cb('400',null);
    }
    var collectionStop = db.get().collection('arret');
    collectionStop.find({'id':docs[0].work}, { _id: 0, id: 0 }).toArray(function(err, docsArret) {
      assert.equal(err, null);
      cb(null,docsArret);
    })
  });
}

exports.all = function(cb) {
  var collection = db.get().collection('user');

  collection.find({}, { _id: 0, id: 0 }).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    cb(null,docs);
  });
}
