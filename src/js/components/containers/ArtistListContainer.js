import { connect } from 'react-redux';

// import { getArtists } from './../../actions';

import ArtistList from './../views/ArtistList';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  artistClickHandler: ( id ) => {
    console.log( id, 'clicked' );
    dispatch({ type: 'SET_ACTIVE_ARTIST', id })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( ArtistList );
