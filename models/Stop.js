var assert = require('assert')
  , mongoose = require('mongoose')
  , fieldToIngore = '-_id';

  var StopSchema = mongoose.Schema({
      label: String,
      number: Number,
      color: String,
      order: Number
  });

  var Stop = mongoose.model('Stop', StopSchema);

  Stop.findStopById = function(id,cb) {
    return this.findOne({ id: id }, fieldToIngore, cb);
  };

  Stop.findStopByLineID = function(id,cb) {
    return this.find({ line_id: id}, fieldToIngore,cb);
  }

  Stop.findAllStop = function(cb){
    return this.find({},fieldToIngore,cb);
  }

  exports.Stop = Stop;
