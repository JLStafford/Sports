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
  console.log(req.body)
  knex.raw(`INSERT INTO events VALUES (default, '${req.body.title}', '${req.body.location}', '${req.body.date}', '${req.body.time}', '${req.body.type}', '${req.cookies.user_id}', '${req.body.description}', ${req.body.private})`)
  .then(function(data) {
    res.redirect('/profile');
  });
});



module.exports = router;
