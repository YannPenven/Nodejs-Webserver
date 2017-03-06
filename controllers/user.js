var express = require('express')
  , router = express.Router()
  , User = require('../models/user')


router.get('/', function(req, res) {
  console.log("in controllers user.js");
  User.all(function(err, docs) {
    //res.render('lignes', {ligne: docs})
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(docs[0]));
  })
})

router.get('/home', function(req, res) {
  if (!req.query.username){
    return res.status(400)
      .send('Not found');
  }
  User.getHome(req.query.username.toLowerCase(),function(err, docs) {
    if(err) return res.status(400)
      .send('Not found');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(docs[0]));
  })
})

router.get('/work', function(req, res) {
  if (!req.query.username){
    return res.status(400)
      .send('Not found');
  }
  User.getWork(req.query.username.toLowerCase(),function(err, docs) {
    if(err) return res.status(400)
      .send('Not found');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(docs[0]));
  })
})

module.exports = router
