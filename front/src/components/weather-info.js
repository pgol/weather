import React from 'react'
import isEmpty from 'lodash/isEmpty';
import {v1} from 'uuid';
function WeatherInfo({ weatherData }) {
  console.log(weatherData);
  let info;
  if (isEmpty(weatherData)) {
    info = (
      <h2>Select place to get weather</h2>
    )
  } else {
    const { item, wind, atmosphere, astronomy } = weatherData;
    const forecastItems = item.forecast.map(f => (
      <div key={v1()} className="column">
        <div>{f.day}</div>
        <div>{f.low} {f.high}</div>
        <div>{f.text}</div>
      </div>
    ));
    info = (
      <div>
        <h4 className="title is-4 is-spaced">{item.title}</h4>
        <div className="box">
          <h3 className="title is-3">Current Conditions</h3>
          <div className="columns">
            <div className="column">{item.condition.temp}° F</div>
            <div className="column">{item.condition.text}</div>
            <div className="column">{item.forecast[0].low} {item.forecast[0].high}</div>
            <div className="column">Wind speed: {wind.speed}</div>
            <div className="column">pressure {atmosphere.pressure}</div>
            <div className="column">humidity {atmosphere.humidity}</div>
            <div className="column">sunset {astronomy.sunset}</div>
            <div className="column">sunrise {astronomy.sunrise}</div>
          </div>
        </div>
        <div className="box">
          <h3 className="title is-3">Forecast</h3>
          <div className="columns">
            {forecastItems}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {info}
    </div>
  );
}

export default WeatherInfo;
