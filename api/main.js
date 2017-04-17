const YQL = require('YQL');
const Boom = require('Boom');
const Hapi = require('hapi');
const _ = require('lodash');
const yqlQueryBuilder = require('./services/yqlQueryBuilder');
const dataTransformer = require('./services/dataTransformer');

function getWeather(codes) {
  return new Promise((resolve, reject) => {
    new YQL(
      yqlQueryBuilder.getPlacesWeather(
        yqlQueryBuilder.getLocationsQuery(...codes)
      )
    ).exec((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    })
  });
}

const server = new Hapi.Server();

server.connection({
  port: 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at ${server.info.uri}`);
});

server.route({
  method: 'GET',
  path: '/weather',
  handler: (req, res) => {
    getWeather(_.castArray(req.query.code))
      .then(weather => {
        if (weather.query.count === 0) {
          res(Boom.notFound('Weather not found'));
        }
        res(dataTransformer.transformWeatherData(weather));
      })
      .catch(err => res(Boom.internal('Internal Server Error')));
  }
});
