import { connect } from 'react-redux';

import { setActiveTrack, setActiveView } from './../../actions';

import Artist from './../views/Artist';

const mapStateToProps = state => ({
  artist: state.artists[ state.activeArtist ],
  tracks: state.tracks[ state.activeArtist ]
});

const mapDispatchToProps = dispatch => ({
  trackClickHandler: ( track => {
    // set the active artist
    dispatch( setActiveTrack( track ) );
    dispatch( setActiveView( 'player') );
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Artist );
