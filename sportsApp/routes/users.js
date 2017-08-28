var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET users listing. */


// login
router.get('/login', function(req, res, next) {
  res.render('login');
});

// submit login
router.post('/login', function(req, res, next) {
 res.redirect('/profile')
});

//get create user
router.get('/new', function(req, res, next) {
  res.render('/createUser', { title: 'Express' });
});

// create user
router.post('/new', function(req, res, next) {
  res.render('/login');
});

// get profile view
router.get('/:id', function(req, res, next) {
  res.render('/profile');
});

// delete user
router.post('/:id/delete', function(req, res, next) {
  res.render('../');
});




module.exports = router;
