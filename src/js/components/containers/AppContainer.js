import { connect } from 'react-redux';

import App from './../App';

const mapStateToProps = state => ({
  activeView: state.activeView
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( App );
