import { combineReducers } from 'redux';

import artists from './artists';
import tracks from './tracks';

const appReducers = combineReducers( {
	artists,
  tracks
} );
export default appReducers;
