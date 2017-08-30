var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET individual indevents page. */
router.get('/:id', function(req, res, next) {
  if (req.cookies.user_id) {
    knex.raw(`SELECT events.*, users.first_name FROM events JOIN atendee_events ON atendee_events.event_id = events.id JOIN users ON users.id = atendee_events.user_id WHERE events.id = ${req.params.id}`)
      .then(function(data) {
        res.render('indEvent', {
          events: data.rows
        });
      });
  } else {
    res.redirect("/")
  }
});

//update/rsvp for ind event
router.post('/:id/edit', function(req, res, next) {
  if (req.cookies.user_id) {

  }
  res.redirect('/');
});

module.exports = router;
