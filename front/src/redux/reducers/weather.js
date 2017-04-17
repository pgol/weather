import actions from '../actions';

const defaultState = {
  weatherData: [],
  loading: false,
  errors: []
};

function weather(state = defaultState, action) {
  switch (action.type) {
    case actions.LOAD_WEATHER_INIT: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.LOAD_WEATHER_ERROR: {
      return {
        ...state,
        errors: [...state.errors, ...action.data.weatherError],
        loading: false
      }
    }
    case actions.LOAD_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        weatherData: action.data.weatherData
      }
    }
    default: {
      return state;
    }
  }
}


export default weather;
