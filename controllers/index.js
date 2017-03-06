var express = require('express')
  , router = express.Router()
  , Ligne = require('../models/ligne')
  , FB = require('fb');

router.use('/line', require('./ligne'))
router.use('/user', require('./user'))
router.use('/stop', require('./arret'))
router.use('/calculate', require('./calculate'))
router.use('/login', require('./login'))
//router.use('/signup', require('./signup'))
router.get('/auth/facebook', function(req, res){
    //req.app.locals.passport.authenticate('facebook', { scope : 'email' })
    //console.log(req.app)
    console.log(FB);
    FB.getLoginStatus(function(response) {
      console.log("hello");
      statusChangeCallback(response);
     });
  });
router.get('/auth/facebook/callback', function(req, res){
  /*req.app.locals.passport.authenticate('facebook', {
    successRedirect : '/user',
    failureRedirect : '/'
  })*/

});

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
});

router.get('/', function(req, res) {
  res.end("Api Tub");
})

module.exports = router
