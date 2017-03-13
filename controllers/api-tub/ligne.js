var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Ligne = require('../../models/ligne');


router.get('/', function(req, res) {
  var Line = mongoose.model('Line');
  Line.findAllLine(function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  })
})

router.get('/:id', function(req, res) {
  var Line = mongoose.model('Line');
  Line.findLineById(req.params.id, function (err, lines) {
    if (err) return console.error(err);
    res.end(JSON.stringify(lines));
  });
})

/*router.get('/add', function(req, res){
  var Line = mongoose.model('Line');
  nLine = new Line({ label: 'Ligne 1 : Norelan <> Velaine', number: 1, color: "#124b9a", order: 1 });
  nLine.save();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify("hello"));
})*/

module.exports = router
