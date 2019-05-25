'use strict';

const Controller           = require('./controller');
const MovieValidator       = require('../../../validators/movie');
const MovieSearchValidator = require('../../../validators/movieSearch');

exports.register = (server, options, next) => {
  server.route([{
    method: 'POST',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply(Controller.create(request.payload));
      },
      validate: {
        payload: MovieValidator
      }
    }
  },
  {
    method: 'GET',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply(Controller.find(request.query));
      },
      validate: {
        query: MovieSearchValidator
      }
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'movies'
};

