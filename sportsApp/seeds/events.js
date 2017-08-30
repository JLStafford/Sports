exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: 'BBalling in the park', location: 'A Park', date: '09-03-2017', time: 1600, type: 'basketball', host_id: 1, description: 'playing some bball outside of the school', private: false},
        {title: 'Crunch Time', location: 'Another Park', date: '09-04-2017', time: 1700, type: 'baseball', host_id: 2, description: 'lets play ken griffy jr baseball', private: false},
        {title: 'Footy Time', location: 'A different Park', date: '09-05-2017', time: 1800, type: 'soccer', host_id: 3, description: 'kick it right in the old onion bag', private: false}
      ]);
    });
};
