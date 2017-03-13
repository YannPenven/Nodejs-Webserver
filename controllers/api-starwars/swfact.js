var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , request = require('request');

  router.get('/', function(req, res){
    request('http://swapi.co/api/', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });

  module.exports = router;
