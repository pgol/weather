import dataFetcher from './data-fetcher';

const weatherFetcher = dataFetcher({
  baseUrl: 'http://localhost:3001'
});

function getWeather(postalCodes) {
  return weatherFetcher.getData('/weather', {
    code: postalCodes
  })
    .then(res => res.data);
}


export default {
  getWeather
}
