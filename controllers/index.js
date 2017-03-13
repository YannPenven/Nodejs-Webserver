var express = require('express')
  , router = express.Router();

router.use('/line', require('./api-tub/ligne'))
router.use('/user', require('./api-tub/user'))
router.use('/stop', require('./api-tub/StopController'))
router.use('/calculate', require('./api-tub/calculate'))
router.use('/swfact', require('./api-starwars/swfact'))

router.get('/', function(req, res) {
  res.end("Api Tub");
})

module.exports = router
