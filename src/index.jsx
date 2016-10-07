// Module
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import RedBox from 'redbox-react';

// File
import routes from './routes';
import reducer from './reducers';

// Import global stylesheets (as side-effects)
import 'react-toolbox/lib/commons.scss';
import './theme/global.pcss';

// Create array of redux middleware
const middleware = [reduxThunk];

// Only use redux-logger in dev
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
}

// Compose middlewares
const enhancer = applyMiddleware(...middleware);
const store = createStore(reducer, enhancer);

// Note: this is the element inside of which we'll render the app
const rootDomElement = document.querySelector('.container');

try {
  const provider = (
    <Provider store={ store }>
      <Router history={ browserHistory } routes={ routes } />
    </Provider>
  );
  render(provider, rootDomElement);
} catch (err) {
  console.error('Rendering error:', err);
  render(<RedBox error={ err } />, rootDomElement);
}
