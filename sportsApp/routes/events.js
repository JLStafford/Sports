var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET events page. */
router.get('/', function(req, res, next) {
  res.render('events', { title: 'Events' });
});

module.exports = router;
