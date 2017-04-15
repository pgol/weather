
function getLocationsQuery(...locations) {
  const queryLocations = locations.map(l => `text="${l}"`);
  return `(select woeid from geo.places(1) where ${queryLocations.join(' or ')})`;
}

function getPlacesWeather(locations) {
  return `select * from weather.forecast where woeid in ${locations}`;
}

module.exports = {
  getLocationsQuery,
  getPlacesWeather
};
