import './../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/index';
import { fetchTopArtists } from './helpers/fetchTopArtists';

// components
import AppContainer from './components/containers/AppContainer';

import { setArtists } from './actions';

// create redux store
const store = configureStore;

// fetch and parse initial items
fetchTopArtists()
  .then( users => {
    store.dispatch( setArtists( users ) );
  });

render(
  <Provider store = { store }>
    <AppContainer />
  </Provider>,
  document.querySelector( '#app' )
);
