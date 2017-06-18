export const fetchTopArtists = () => {
  let path = 'https://api-v2.hearthis.at/feed/?type=popular&page=1&count=20';

  return fetch( path, {
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
      const request = fetch(`https://api-v2.hearthis.at/${ permalink }/` );
      return request;
    }));
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
    return userData;
  }).catch( error => {
    console.log( 'error:', error );
  })
};
