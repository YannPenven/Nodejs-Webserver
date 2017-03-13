var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose');


router.get('/all', function(req, res) {
  var Stop = mongoose.model('stop');
  Stop.findAllStop(function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  })
})

router.get('/:id', function(req, res) {
  var Stop = mongoose.model('stop');
  Stop.findStopById(req.params.id, function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  })
})

module.exports = router
