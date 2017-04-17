import React from 'react'

function WeatherInfo({weatherData}) {
  console.log(weatherData);
  return (
    <div className="box">
        WeatherInfo
        <h2>{weatherData.title}</h2>
    </div>
  );
}

export default WeatherInfo;
