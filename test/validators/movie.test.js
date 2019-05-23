'use strict';

const Joi = require('joi');

const MovieValidator = require('../../lib/validators/movie');

describe('movie validator', () => {

  describe('title', () => {

    it('is required', () => {
      const payload = {};
      const result = Joi.validate(payload, MovieValidator);

      expect(result.error.details[0].path[0]).to.eql('title');
	    expect(result.error.details[0].type).to.eql('any.required');
    });

    it('is less than 255 characters', () => {
      const lob = 'lob'.repeat(86);
      const payload = {
        title: lob
      };
      const result = Joi.validate(payload, MovieValidator);

      expect(result.error.details[0].path[0]).to.eql('title');
	    expect(result.error.details[0].type).to.eql('string.max');
    });

  });

  describe('release_year', () => {

    it('is after 1878', () => {
      const payload = {
<<<<<<< HEAD
        title: 'Lob Club',
        release_year: 1800
=======
        title:"Lob Club",
        release_year:1800
>>>>>>> test(validators): added unit tesst for the movie validator
      };
      const result = Joi.validate(payload, MovieValidator);

      expect(result.error.details[0].path[0]).to.eql('release_year');
	    expect(result.error.details[0].type).to.eql('number.min');
    });

    it('is limited to 4 digits', () => {
      const payload = {
<<<<<<< HEAD
        title: 'Lobian Rhapsody',
        release_year: 18000
=======
        title:"Lobian Rhapsody",
        release_year:18000
>>>>>>> test(validators): added unit tesst for the movie validator
      };
      const result = Joi.validate(payload, MovieValidator);

      expect(result.error.details[0].path[0]).to.eql('release_year');
	    expect(result.error.details[0].type).to.eql('number.max');
    });

  });

});
