export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_TRACK':

      return action.id;
    default:

      return state;
  }
}
