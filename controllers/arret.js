var express = require('express')
  , router = express.Router()
  , Arret = require('../models/arret')


router.get('/all', function(req, res) {
  console.log("in controllers ligne.js");
  Arret.all(function(err, docs) {
    //res.render('lignes', {ligne: docs})
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(docs));
  })
})

router.get('/:id', function(req, res) {
  Arret.getById(parseInt(req.params.id),function(err, docs) {
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(docs));
  })
})

module.exports = router
