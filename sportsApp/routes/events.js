var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET ividual indevents page. */
router.get('/:id', function(req, res, next) {
  res.render('indEvent');
});

//update/rsvp for ind event
router.post('/:id/edit', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
