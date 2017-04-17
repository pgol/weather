const yqlQueryBuilder = require('../services/yqlQueryBuilder');

test('getLocations', () => {
  expect(
    yqlQueryBuilder.getLocationsQuery(...['31-229', '21-100'])
  ).toBe('(select woeid from geo.places(1) where text="31-229" or text="21-100")');
});

