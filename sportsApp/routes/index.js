var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

// get splash
router.get('/', function(req, res, next) {
  res.render('index');
});

//get search
router.get('/search', function(req, res, next) {
  res.render('search');
});

//post search
router.post('/search', function(req, res, next) {
  res.redirect('/results');
});

//get results
router.get('/results', function(req, res, next) {
  res.render('results');
});

//get create new event form
router.get('/newEvent', function(req, res, next) {
  res.render('newEvent');
});

//post create new event form
router.post('/newEvent', function(req, res, next) {
  res.redirect('/profile');
});



module.exports = router;
