import { combineReducers } from 'redux';

import artists from './artists';
import tracks from './tracks';
import activeArtist from './activeArtist';

const appReducers = combineReducers( {
	artists,
  tracks,
	activeArtist
} );
export default appReducers;
