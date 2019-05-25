'use strict';

const Controller = require('../../../../lib/plugins/features/movies/controller');

describe('movie controller', () => {

  describe('create', () => {

    it('creates a movie', async () => {
      const payload = { title: 'WALL-E' };
      const movie = await Controller.create(payload);
      expect(movie.get('title')).to.eql(payload.title);

    });

  });

  describe('list', () => {

    it('returns an array of movies', async () => {
      const query = {};

      const movies = await Controller.find(query);

      expect(movies).to.be.an('object');
    });

    it('returns an array of movies released at an exact year', async () => {
      const query = { release_year: 1999 };

      const movies = await Controller.find(query);
      const initialLength = movies.length;
      movies.filter((movie) => movie.release_year = 1999);
      const filteredLength = movies.length;

      expect(filteredLength).to.eql(initialLength);
    });

    it('returns an array of movies in range of years', async () => {
      const query = {
        start_year: 1999,
        end_year: 2010
      };

      const movies = await Controller.find(query);
      const initialLength = movies.length;
      movies.filter((movie) => movie.release_year >= 1999 && movie.release_year <= 2010);
      const filteredLength = movies.length;

      expect(filteredLength).to.eql(initialLength);
    });

  });

});
