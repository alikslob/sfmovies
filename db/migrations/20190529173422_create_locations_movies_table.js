
'use strict';

exports.up = (Knex) => {
  return Knex.schema.createTable('locations_movies', (table) => {
    table.integer('movie_id').references('movies.id').notNullable();
    table.integer('location_id').references('locations.id').notNullable();
    table.increments('id').primary();
  });
};

exports.down = (Knex) =>  {
  return Knex.schema.dropTable('locations_movies');
};
