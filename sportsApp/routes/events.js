var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

/* GET individual indevents page. */
router.get('/:id', function(req, res, next) {
  if (req.cookies.user_id) {
    knex.raw(`SELECT events.*, users.first_name FROM events JOIN atendee_events ON atendee_events.event_id = events.id JOIN users ON users.id = atendee_events.user_id WHERE events.id = ${req.params.id}`)
      .then(function(data) {
        console.log(data.rows);
        res.render('indEvent', {events: data.rows, routeId: data.rows[0].id, cookie: req.cookies.user_id});
      });
  } else {
    res.redirect("/")
  }
});

//update/rsvp for ind event
router.post('/:id', function(req, res, next) {
  if (req.cookies.user_id) {
    knex.raw(`INSERT INTO atendee_events VALUES (default, ${req.cookies.user_id}, ${req.params.id})`)
    .then(function(data3) {
      res.redirect(`/events/${req.params.id}`, { cookie: req.cookies.user_id });
    })
  } else {
    res.redirect('/');
  }
});

//get edit event
router.get('/:id/edit', function(req, res, next) {
  knex.raw(`SELECT * FROM events WHERE id = ${req.params.id}`)
  .then(function(info) {
    res.render("editEvent", {eventInfo: info.rows[0], cookie: req.cookies.user_id})
  })
})

//post edit/update event
router.post('/:id/edit', function(req, res, next) {
  console.log(req.params.id);
  knex.raw(`UPDATE events SET title = '${req.body.title}', location = '${req.body.location}', date = '${req.body.date}', time = '${req.body.time}', type = '${req.body.type}', description = '${req.body.description}', private = ${req.body.private} WHERE events.id = ${req.params.id}`)
  .then(function(info) {
    res.redirect(`/users/${req.cookies.user_id}`)
  })
})

//delete event
router.post('/:id/delete', function(req, res, next) {
  knex.raw(`DELETE FROM events WHERE id = ${req.params.id}`)
  .then(function(info) {
    res.redirect(`/users/${req.params.id}`)
  })
})

module.exports = router;
