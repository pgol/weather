const _ = require('lodash');

function transformWeatherData(data) {
  return Object.assign({}, {
    count: data.query.count,
    data: _.castArray(data.query.results.channel)
  });
}

module.exports = {
  transformWeatherData
};
