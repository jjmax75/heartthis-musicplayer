// get initial artist data
export const setArtists = artists => ({
  type: 'UPDATE_ARTISTS_STORE',
  artists
});

// set active user
export const setActiveArtist = id => ({
  type: 'SET_ACTIVE_ARTIST',
  id
});

// set artist's tracks
export const setArtistTracks = ( id, tracks ) => ({
  type: 'SET_ARTIST_TRACKS',
  id,
  tracks
});

// set active view
export const setActiveView = view => ({
  type: 'SET_ACTIVE_VIEW',
  view
});

// set active tracks
export const setActiveTrack = id => ({
  type: 'SET_ACTIVE_TRACK',
  id
});
