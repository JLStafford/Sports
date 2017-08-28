
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table.string('sport');
    table.string('location');
    table.integer('time');
    table.string('skill_level');
    table.boolean('public')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
