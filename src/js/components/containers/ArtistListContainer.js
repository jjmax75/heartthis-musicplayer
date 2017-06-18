import { connect } from 'react-redux';

import { setActiveArtist, setArtistTracks, setActiveView } from './../../actions';

import { fetchArtistTracks } from './../../helpers/fetchArtistTracks';

import ArtistList from './../views/ArtistList';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  artistClickHandler: ( ( id, permalink ) => {
    // set the active artist
    dispatch( setActiveArtist( id ) );
    dispatch( setActiveView( 'artist') );

    // get the artist's tracks
    fetchArtistTracks( permalink )
      .then( tracks => dispatch( setArtistTracks( id, tracks ) ) );
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( ArtistList );
