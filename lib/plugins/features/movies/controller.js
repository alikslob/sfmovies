'use strict';

const Movie         = require('../../../models/movie');
const Location      = require('../../../models/location');
const LocationMovie = require('../../../models/locations_movies');

exports.create = async (payload) => {
  if (!payload.name) {
    payload.name = payload.title;
  }

  const movie = await new Movie().save(payload);

  return new Movie({ id: movie.id }).fetch();
};

exports.find = async (query) => {
  const Movies = Movie.collection();
  return Movies.query((queryBuilder) => {

    if (query.title) {
      queryBuilder.where('title', '=', query.title);
    } else if (query.release_year) {
      queryBuilder.where('release_year', '=', query.release_year);
    } if (query.start_year) {
      queryBuilder.where('release_year', '>=', query.start_year);
    } if (query.end_year) {
      queryBuilder.where('release_year', '<=', query.end_year);
    }
  }).fetch({ withRelated: ['locations'] });
};
exports.addLocation = async (movieId, payload) => {
  let location = await new Location().query((queryBuilder) => {
    queryBuilder.where('name', 'like', payload.name);
  }).fetch();

  if (!location) {
    location = await new Location().save(payload);
  }

  const locationId = location.id;
  const set = await new LocationMovie().save({ location_id: locationId, movie_id: parseInt(movieId) });
  return set;
};

