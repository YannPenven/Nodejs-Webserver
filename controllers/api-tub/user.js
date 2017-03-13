var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = require('../../models/user');


router.get('/', function(req, res) {
  var User = mongoose.model('User');
  User.findAll(function (err, users) {
    if (err) return res.status(400)
       .send('Not Found');
    res.end(JSON.stringify(users));
  })
})

router.get('/home', function(req, res) {
  if (!req.query.username){
      res.status(400);
      return res.end(JSON.stringify({"Error":"Not Found"}));
  }
  var User = mongoose.model('User');
  var Stop = mongoose.model('Stop');
  User.findHome(req.query.username.toLowerCase(), function (err, user){
    if (err) return res.status(400)
       .send('Not Found');
    Stop.findById(user.work,function (err, stop){
      if (err) return res.status(400)
         .send('Not Found');
      res.end(JSON.stringify(stop));
    })
  })
})

router.get('/work', function(req, res) {
  if (!req.query.username){
      res.status(400);
      return res.end(JSON.stringify({"Error":"Not Found"}));
  }
  var User = mongoose.model('User');
  var Stop = mongoose.model('Stop');
  User.findWork(req.query.username.toLowerCase(), function (err, user){
    if (err) return res.status(400)
       .send('Not Found');
    Stop.findById(user.work,function (err, stop){
      if (err) return res.status(400)
         .send('Not Found');
      res.end(JSON.stringify(stop));
    })
  })
})

module.exports = router
