var express = require('express')
  , router = express.Router()
var response = require('response');
//var db = require('db');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
//var passport = require('passport');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);
var db = mongoose.connection;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static('/public'));
	// required for passport
app.use(session({ secret: 'uyoud438tr3743xfch3vjbkuiyktr' })); // session secret
//app.use('passport', passport.initialize());
//app.use('session', passport.session()); // persistent login sessions

//app.use('/comments', require('./controllers/comments'))
//app.use('/all', require('./controllers/ligne'))

/*app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
    //db.createDb();
    //db.createTable();
});

app.get('/travel', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous partez de' + req.params.begin + 'pour aller à ' + req.params.end);
    //db.readAllRows();
});*/


//app.locals.passport = passport;
app.use(require('./controllers'))

/*db.connect('mongodb://localhost:27017/local', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {

  }
})*/
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(3000, function() {
    console.log('Listening on port 3000...')
  })
});

//var server = app.listen(8080);
/*
process.on('SIGINT', function() {
  if(db !== null){
    db.closeDb();
  };
  server.close();
});*/
