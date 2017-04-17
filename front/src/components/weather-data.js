import React from 'react'
import {v1} from 'uuid';

function WeatherInfo({weatherData}) {
  const { location, item, wind, atmosphere, astronomy, units } = weatherData;
  const tempUnit = units['temperature'];
  const speedUnit = units['speed'];
  const pressureUnit = units['pressure'];
  //slice to skip current day
  const forecastItems = item.forecast.slice(1).map(f => (
    <div key={v1()} className="item">
      <div>{f.day}</div>
      <div>
        {f.low}° {tempUnit} <i className="fa fa-arrow-down" aria-hidden="true"></i>
        {f.high}° {tempUnit} <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
      <div>{f.text}</div>
    </div>
  ));

  return (
    <div>
      <h4 className="title is-4 is-spaced">
        <i className="fa fa-location-arrow" aria-hidden="true"></i>
        {location.city}, {location.region}, {location.country}
      </h4>
      <div className="box">
        <h3 className="title is-3">Current Conditions</h3>
        <div className="items is-mobile conditions">
          <div className="item">{item.condition.temp}° {tempUnit}</div>
          <div className="item">{item.condition.text}</div>
          <div className="item temps">
            {item.forecast[0].low}° {tempUnit}<i className="fa fa-arrow-down" aria-hidden="true"></i>
            {item.forecast[0].high}° {tempUnit}<i className="fa fa-arrow-up" aria-hidden="true"></i>
          </div>
          <div className="item">Wind speed: {wind.speed} {speedUnit}</div>
          <div className="item">pressure {atmosphere.pressure} {pressureUnit}</div>
          <div className="item">humidity {atmosphere.humidity}</div>
          <div className="item">sunset {astronomy.sunset}</div>
          <div className="item">sunrise {astronomy.sunrise}</div>
        </div>
      </div>
      <div className="box">
        <h3 className="title is-3">Forecast</h3>
        <div className="forecast items">
          {forecastItems}
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo;
