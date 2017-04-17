import React, {Component} from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';

import actions from '../redux/actions';
import PlacePicker from './place-picker';
import WeatherInfo from './weather-info';

class WeatherView extends Component {
  render() {
    const weatherObject = get(this.props.weatherData, 'data.0', []);
    return (
      <div className="container">
        <h1 className="title is-1 is-spaced">Weather info</h1>
        <PlacePicker
          selectedPlace={this.props.selectedPlace}
          placesList={this.props.placesList}
          onSelectedPlace={this.props.onSelectedPlace}
          onButtonClick={this.props.onButtonClick}
        />
        <WeatherInfo
          weatherData={weatherObject}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  placesList: state.places.placesList,
  selectedPlace: state.places.selectedPlace,
  weatherData: state.weather.weatherData
});

const mapDispatchToProps = (dispatch, store) => ({
  onSelectedPlace: (event, key, payload) => dispatch(actions.selectPlace(payload)),
  onButtonClick: (code, e) => {
    console.log(code);
    return dispatch(actions.getWeather(code));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherView);
