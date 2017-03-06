var express = require('express')
  , router = express.Router()
  , User = require('../models/user')
  , FB = require('fb');

router.get('/', function(req, res) {
  res.render('../views/login.ejs', '');
})

router.post('/', function(req, res){
  /*req.app.locals.passport.authenticate('facebook', {
		successRedirect : '/user',
		failureRedirect : '/login'
  })*/
  
})

  module.exports = router
