var assert = require('assert')
  , mongoose = require('mongoose')
  , fieldToIngore = '-_id -__v';

var LineSchema = mongoose.Schema({
    label: String,
    number: Number,
    color: String,
    order: Number
});

var Line = mongoose.model('Line', LineSchema);

Line.findLineById = function(id,cb) {
  return this.findOne({ number: id }, fieldToIngore, cb);
};

Line.findAllLine = function(cb){
  return this.find({},fieldToIngore,cb);
}

exports.Line = Line;
