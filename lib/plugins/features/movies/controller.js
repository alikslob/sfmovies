'use strict';

const Movie = require('../../../models/movie');
const Movies = Movie.collection();

exports.create = async (payload) => {
  if (!payload.name) {
    payload.name = payload.title;
  }
  const movie = await new Movie().save(payload);
  return new Movie({ id: movie.id }).fetch();
};

exports.find = async (query) => {
  const movies = Movies.query((queryBuilder) => {

    if (query.title) {
      queryBuilder.where('title', '=', query.title);
    } else if (query.release_year) {
      queryBuilder.where('release_year', '=', query.release_year);
    } if (query.start_year) {
      queryBuilder.where('release_year', '>=', query.start_year);
    } if (query.end_year) {
      queryBuilder.where('release_year', '<=', query.end_year);
    }
  }).fetch();

  return movies;
};
