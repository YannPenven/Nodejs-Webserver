var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')


router.get('/', function(req, res) {
  /*Ligne.all(function(err, docs) {
    //res.render('lignes', {ligne: docs})
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(docs));
  })*/
  var Line = mongoose.model('Line');
  Line.find(function (err, lines) {
    if (err) return console.error(err);
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(lines));
  })
  //console.log(Line);
  //console.log(Ligne);
})

router.get('/add', function(req, res){
  var Line = mongoose.model('Line');
  nLine = new Line({ label: 'Ligne 1 : Norelan <> Velaine', number: 1, color: "#124b9a", order: 1 });
  nLine.save();
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify("hello"));
})

module.exports = router
