import { combineReducers } from 'redux';

import artists from './artists';
import tracks from './tracks';
import activeArtist from './activeArtist';
import activeView from './activeView';
import activeTrack from './activeTrack';

const appReducers = combineReducers( {
	artists,
  tracks,
	activeArtist,
	activeView,
	activeTrack
} );
export default appReducers;
