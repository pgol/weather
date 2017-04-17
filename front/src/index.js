import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import WeatherView from './components/weather-view';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './redux/store';
import 'bulma/css/bulma.css';
import './index.css';

//for Material-UI
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <WeatherView />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
