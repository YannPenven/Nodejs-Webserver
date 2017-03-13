var express = require('express')
  , router = express.Router()
  , Calculate = require('../../models/calculate')


router.get('/', function(req, res) {
  if (!req.query.start || !req.query.end || !req.query.time){
    res.status(400)
      .send('Not found');
    return;
  }
  Calculate.time({'start': req.query.start, 'end': req.query.end, 'beginTime': req.query.time},function(err, docs) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(docs));
  })
})

module.exports = router
