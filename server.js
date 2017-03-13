var express = require('express')
  , router = express.Router()
  , response = require('response')
  , app = express()
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , mongoose = require('mongoose')
  , configDB = require('./config/database.js');

mongoose.connect(configDB.url);
var db = mongoose.connection;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser()); // get information from html forms
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static('/public'));
app.use(session({ secret: 'uyoud438tr3743xfch3vjbkuiyktr' })); // session secret

app.use(require('./controllers'));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(3000, function() {
    console.log('Listening on port 3000...')
  })
});
