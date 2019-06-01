'use strict';

const Bookshelf = require('../libraries/bookshelf');
const Location  = require('./location');
const Movie     = require('./movie');

module.exports = Bookshelf.Model.extend({
  tableName: 'locations_movies',
  location: function () {
    return this.belongsTo(Movie, 'movie_id', 'movies.id');
  },
  movie: function () {
    return this.belongsTo(Location, 'location_id', 'location.id');
  },
  serialize: function () {
    return {
      movie_id: this.get('movie_id'),
      location_id: this.get('location_id'),
      object: 'location_movie'
    };
  }
});
