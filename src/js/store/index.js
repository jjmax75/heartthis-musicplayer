import { createStore, compose } from 'redux';

import appReducers from './../reducers/index';

const configureStore = createStore(
  appReducers,
  { artists: {},tracks: {}, activeArtist: null, activeTrack: null },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
