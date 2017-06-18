import './../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
// import { fetchItems } from './helpers/fetch';

// components
import App from './components/App';

// create redux store
const store = configureStore;

// fetch and parse initial items
// const getItemsPath = 'http://localhost:8000/api/products';
// fetchItems( getItemsPath, store );

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.querySelector( '#app' )
);
