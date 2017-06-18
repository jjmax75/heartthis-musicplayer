export const fetchArtistTracks = permalink => {
  let path = `https://api-v2.hearthis.at/${ permalink }/?type=tracks&page=1&count=20`;

  return fetch( path, {
    method: 'get'
  }).then( response => {
    // parse response to json
    return response.json();
  }).then( tracks => {
    return tracks;
  }).catch( error => {
    console.log( 'error:', error );
  })
};
