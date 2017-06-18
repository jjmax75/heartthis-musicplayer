export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'UPDATE_TRACKS_STORE':
      let newTracks = {};

      return Object.assign( {}, state, newTracks );
    default:
      return state;
  }
}
