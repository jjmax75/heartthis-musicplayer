export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_ARTIST_TRACKS':

      const buildTracks = tracks => {
        let newTracks = {};

        tracks.forEach( track => {
          newTracks[ track.id ] = track;
        })

        return newTracks;
      };

      let artistTracks = state[ action.id ] ?
        Object.assign( {}, state[ action.id ], buildTracks( action.tracks ) ) :
        buildTracks( action.tracks );

      let newState = Object.assign( {}, state );
      newState[ action.id ] = artistTracks;

      return newState;
    default:
      return state;
  }
}
