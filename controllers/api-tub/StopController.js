var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Stop = require('../../models/Stop');


router.get('/', function(req, res) {
  var Stop = mongoose.model('stop');
  Stop.findAll(function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  })
})

router.get('/:id', function(req, res) {
  var Stop = mongoose.model('stop');
  Stop.findById(req.params.id, function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  })
})

module.exports = router
