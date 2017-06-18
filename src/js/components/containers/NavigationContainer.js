import { connect } from 'react-redux';

import Navigation from './../views/Navigation';

import { setActiveView } from './../../actions';

const mapStateToProps = state => ({
  activeArtist: state.activeArtist,
  activeTrack: state.activeTrack
});

const mapDispatchToProps = dispatch => ({
  navClickHandler: ( view => {
      dispatch( setActiveView( view ) );
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Navigation );
