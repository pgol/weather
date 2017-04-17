import React, {Component} from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';

import actions from '../redux/actions';
import PlacePicker from './place-picker';
import WeatherInfo from './weather-info';
import ErrorList from './error-list';

class WeatherView extends Component {
  render() {
    const weatherObject = get(this.props.weatherData, 'data.0', []);
    const errorMessage = get(this.props.errors, '0.message', '');
    return (
      <div className="container">
        <h1 className="title is-1 is-spaced hidden-mobile">Weather info</h1>
        <PlacePicker
          selectedPlace={this.props.selectedPlace}
          placesList={this.props.placesList}
          onSelectedPlace={this.props.onSelectedPlace}
          onButtonClick={this.props.onButtonClick}
          isLoading={this.props.isLoading}
        />
        <ErrorList message={errorMessage}/>
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
  weatherData: state.weather.weatherData,
  errors: state.weather.errors,
  isLoading: state.weather.loading
});

const mapDispatchToProps = (dispatch, store) => ({
  onSelectedPlace: (event, key, payload) => dispatch(actions.selectPlace(payload)),
  onButtonClick: code => dispatch(actions.getWeather(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherView);
