export const fetchTopArtists = ( path, store ) => {
  fetch( path, {
    method: 'get'
  }).then( response => {
    // parse response to json
    return response.json();
  }).then( tracks => {
    // get permalinks
    // filter out duplicate users
    return tracks.filter( ( item, position ) => {
      return tracks.indexOf( item ) === position;
    }).map( track => { // return user permalinks
      return track.user.permalink;
    })
  }).then( permalinks => {
    // build fetch requests from permalinks
    return Promise.all( permalinks.map( permalink => {
      const request = fetch('https://api-v2.hearthis.at/' + permalink + '/' );
      return request;
    }));
    // return users;
  }).then( responses => {
    // parse responses
    return Promise.all( responses.map( response => {
      return response.json().then( user => {
        return user;
      });
    }));
  }).then( users => {
    let userData = {};
    users.forEach( user => userData[ user.id ] = user );
    store.dispatch({ type: 'UPDATE_ARTISTS_STORE', userData })
  }).catch( error => {
    console.log( 'error:', error );
  })
};
