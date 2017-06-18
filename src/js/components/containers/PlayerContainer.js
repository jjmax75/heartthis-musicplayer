import { connect } from 'react-redux';

import Player from './../views/Player';

const mapStateToProps = state => ({
  activeTrack: state.activeTrack
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Player );
