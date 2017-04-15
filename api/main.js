const YQL = require('YQL');
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
server.connection({ port: 3000, host: 'localhost' });
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
    getWeather(_.castArray(req.query.code)).then(weather => {
      res(dataTransformer.transformWeatherData(weather));
    });
  }
});
