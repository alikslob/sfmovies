'use strict';

const Movies = require('../../../../lib/server');

describe('movies integration', () => {

  describe('create', () => {

    it('creates a movie', () => {
      return Movies.inject({
        url: '/movies',
        method: 'POST',
        payload: { title: 'Volver' }
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
        expect(response.result.object).to.eql('movie');
      });
    });

  });

  describe('add', () => {

    it('adds a new location to a movie', () => {
      return Movies.inject({
        url: '/movies/1/location',
        method: 'POST',
        payload: { name: 'Soma' }
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
        expect(response.result.object).to.eql('location_movie');
        expect(response.result.movie_id).to.eql(1);
        expect(response.result.location_id).to.eql(1);
      });
    });

  });

});
