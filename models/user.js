var assert = require('assert')
  , mongoose = require('mongoose')
  , fieldToIngore = '-_id';

var userSchema = mongoose.Schema({
      username: String,
      home: String,
      work: String
});

var User = mongoose.model('User', userSchema);

User.findAll = function(cb) {
  return this.findOne({ }, fieldToIngore, cb);
}

User.findByName = function(name,cb) {
  return this.findOne({ name:name }, fieldToIngore, cb);
}

exports.User = User;
