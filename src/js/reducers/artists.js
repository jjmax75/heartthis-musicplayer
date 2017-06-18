export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'UPDATE_ARTISTS_STORE':

      return Object.assign( {}, state, action.artists );
    default:
      return state;
  }
}
