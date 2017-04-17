import React from 'react'
import isEmpty from 'lodash/isEmpty';
import WeatherData from './weather-data';

function WeatherInfo({ weatherData }) {
  if (isEmpty(weatherData)) {
    return (
      <div>
        <h2>Select place to get weather</h2>
      </div>
    )
  }
  return <WeatherData weatherData={weatherData} />

}

export default WeatherInfo;
