export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'UPDATE_ARTISTS_STORE':
      let newArtists = {};

      return Object.assign( {}, state, newArtists );
    default:
      return state;
  }
}
