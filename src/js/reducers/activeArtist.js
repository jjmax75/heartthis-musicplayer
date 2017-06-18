export default ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_ACTIVE_ARTIST':
      return action.id;
    default:
      return state;
  }
}
