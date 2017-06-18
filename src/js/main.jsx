import './../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import { fetchTopArtists } from './helpers/fetchTopArtists';

// components
import App from './components/App';

// create redux store
const store = configureStore;

// fetch and parse initial items
const getInitialTopArtistsPath =
  'https://api-v2.hearthis.at/feed/?type=popular&page=1&count=20';
fetchTopArtists( getInitialTopArtistsPath, store );

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.querySelector( '#app' )
);
