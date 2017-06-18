import './../../scss/app.scss'

import React from 'react';
import PropTypes from 'prop-types';

// views
import ArtistListContainer from './containers/ArtistListContainer';

const App = props => {

  return (
    <div className = 'app'>
      <ArtistListContainer />
    </div>
  );
};

App.propTypes = {
}

export default App;
