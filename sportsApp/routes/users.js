var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

/* GET users listing. */


// login
router.get('/login', function(req, res, next) {
  res.render('login');
});

// submit login
router.post('/login', function(req, res, next) {
  knex.raw(`SELECT * FROM users WHERE email = '${req.body.email}'`)
  .then(function(users) {
    bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
      if (resp) {
        res.cookie('user_id', users.rows[0].id)
        res.redirect(`/users/${users.rows[0].id}`)
      } else {
        res.redirect('/login')
      }
    });
  });
});

//get create user
router.get('/new', function(req, res, next) {
  res.render('createUser', { title: 'Express' });
});

// create user
router.post('/new', function(req, res, next) {
  if(req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 4, function(err, hash) {
      knex.raw(`INSERT INTO users VALUES (default, '${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${hash}')`)
      .then(function(data) {
        res.redirect('/users/login')
      })
    })
  } else {
    res.redirect('/new')
  }
});

// get profile view
router.get('/:id', function(req, res, next) {
  if(req.cookies.user_id) {
    knex.raw(`SELECT * FROM users where id = ${req.cookies.user_id}`)
    .then(function(user) {
      res.render('profile', {user: user.rows[0], })
    })
  } else {
    res.redirect('/login');
  }
});

// delete account
router.post('/:id/delete', function(req, res, next) {
  knex.raw(`DELETE FROM users where id = '${req.params.id}'`)
  .then(function(data) {
    res.clearCookie('user_id');
    res.redirect('/')
  });
});

router.get('/:id/logout', function(req, res, next) {
  res.clearCookie('user_id');
  res.redirect('/')
});




module.exports = router;
