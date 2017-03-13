var assert = require('assert')
  , mongoose = require('mongoose')
  , fieldToIngore = '-_id';

  var StopSchema = mongoose.Schema({
      id: Number,
      label: String,
      latitude : Number,
      longitude : Number,
      line_id : Number
  });

  var Stop = mongoose.model('stop', StopSchema);

  Stop.findById = function(id,cb) {
    return this.findOne({ id: id }, fieldToIngore, cb);
  }

  Stop.findByLineID = function(id,cb) {
    return this.find({ line_id: id}, fieldToIngore,cb);
  }

  Stop.findAll = function(cb){
    return this.find({},fieldToIngore,cb);
  }

  exports.Stop = Stop;
