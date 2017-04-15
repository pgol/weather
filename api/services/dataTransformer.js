function transformWeatherData(data) {
  return Object.assign({}, {
    count: data.query.count,
    data: [...data.query.results.channel]
  });
}

module.exports = {
  transformWeatherData
};
