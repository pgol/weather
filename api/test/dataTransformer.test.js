const dataTransformer = require('../services/dataTransformer');

const dataMock = {
  "query": {
    "count": 2,
    "created": "2017-04-15T09:50:13Z",
    "lang": "en-US",
    "results": {
      channel: [
        {
          id: 1,
          title: 'testItem',
          some: {
            deep: {
              property: 1
            }
          }
        }
      ]
    }
  }
};

const outputFormat = {
  count: 2,
  data: [
    {
      id: 1,
      title: 'testItem',
      some: {
        deep: {
          property: 1
        }
      }
    }
  ]
};

test('transformWeatherData', () => {
  console.log(dataTransformer.transformWeatherData(dataMock));
  expect(
    dataTransformer.transformWeatherData(dataMock)
  ).toMatchObject(outputFormat)
});
