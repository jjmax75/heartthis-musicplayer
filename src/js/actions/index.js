// get initial artist data
export const getArtists = artists => ({
  type: UPDATE_ARTISTS_STORE,
  artists
});

// set active user
export const setActiveArtist = id => ({
  type: SET_ACTIVE_ARTIST,
  id
})
