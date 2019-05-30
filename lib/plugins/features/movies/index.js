'use strict';

const Controller             = require('./controller');
const MovieLocationValidator = require('../../../validators/movieLocation');
const MovieSearchValidator   = require('../../../validators/movieSearch');
const MovieValidator         = require('../../../validators/movie');

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
  },
  {
    method: 'POST',
    path: '/movies/{id}/location',
    config: {
      handler: (request, reply) => {
        reply(Controller.addLocation(request.params.id, request.payload));
      },
      validate: {
        payload: MovieLocationValidator
      }
    }
  }
  ]);

  next();
};

exports.register.attributes = {
  name: 'movies'
};

