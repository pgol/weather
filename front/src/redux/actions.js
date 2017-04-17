import weatherApiClient from '../services/weatherApiClient';

const LOAD_WEATHER_INIT = 'LOAD_WEATHER_INIT';
function loadWeatherInit() {
  return {
    type: LOAD_WEATHER_INIT
  }
}


const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
function loadWeatherSuccess(weatherData) {
  return {
    type: LOAD_WEATHER_SUCCESS,
    data: {
      weatherData
    }
  }
}

const LOAD_WEATHER_ERROR = 'LOAD_WEATHER_ERROR';
function loadWeatherError(weatherError) {
  return {
    type: LOAD_WEATHER_ERROR,
    data: {
      weatherError
    }
  };
}

const SELECT_PLACE = 'SELECT_PLACE';
function selectPlace(postalCode) {
  return {
    type: SELECT_PLACE,
    data: {
      postalCode
    }
  }
}


function getWeather(codes) {
  return dispatch => {
    dispatch(loadWeatherInit());
    return weatherApiClient.getWeather(codes)
      .then(weather => dispatch(loadWeatherSuccess(weather)))
      .catch(error => dispatch(loadWeatherError(error)))
  }
}

export default  {
  LOAD_WEATHER_INIT,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  getWeather,
  SELECT_PLACE,
  selectPlace
}
