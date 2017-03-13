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
  return this.find({ }, fieldToIngore, cb);
}

User.findByName = function(_username,cb) {
  return this.findOne({ username:_username }, fieldToIngore, cb);
}

User.findHome = function(_username,cb){
  return this.findOne({username:_username}, fieldToIngore, cb);
}

User.findWork = function(_username,cb){
  return this.findOne({username:_username}, fieldToIngore, cb);
}

exports.User = User;
