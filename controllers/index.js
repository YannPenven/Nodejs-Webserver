var express = require('express')
  , router = express.Router()
  , Ligne = require('../models/ligne')
  , Stop = require('../models/Stop');

router.use('/line', require('./ligne'))
router.use('/user', require('./user'))
router.use('/stop', require('./api-tub/StopController'))
router.use('/calculate', require('./api-tub/calculate'))
router.use('/swfact', require('./api-starwars/swfact'))

router.get('/', function(req, res) {
  res.end("Api Tub");
})

module.exports = router
