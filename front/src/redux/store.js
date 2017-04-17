import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import places from './reducers/places';
import weather from './reducers/weather';
const store = createStore(
  combineReducers({
    places,
    weather
  }),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
