//var db = require('db');
var assert = require('assert');
var mongoose = require('mongoose')


/*exports.all = function(cb) {
  var collection = db.get().collection('ligne');
  //console.log(collection);
  // Find some documents
  collection.find({} , {_id: 0}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    cb(null,docs);
  });
}*/

var LineSchema = mongoose.Schema({
    label: String,
    number: Number,
    color: String,
    order: Number
});

var Line = mongoose.model('Line', LineSchema);

exports.Line = Line;
