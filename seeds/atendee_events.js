exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('atendee_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('atendee_events').insert([
        {user_id: 1, event_id: 1},
        {user_id: 2, event_id: 2},
        {user_id: 3, event_id: 3}
      ]);
    });
};
