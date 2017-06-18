import './../../scss/app.scss'

import React from 'react';
import PropTypes from 'prop-types';

// views
import ArtistListContainer from './containers/ArtistListContainer';
import ArtistContainer from './containers/ArtistContainer';
import PlayerContainer from './containers/PlayerContainer';
import NavigationContainer from './containers/NavigationContainer';

const App = props => {
  // very basic routing
  const pickView = activeView => {
    switch( activeView ) {
      case 'artistList':
        return <ArtistListContainer />
      case 'artist':
        return <ArtistContainer />
      case 'player':
        return <PlayerContainer />
      default:
        return <ArtistListContainer />
    }
  };

  return (
    <div>
      <div className = 'nav'>
        <NavigationContainer />
      </div>
      <div className = 'app'>
        { pickView( props.activeView ) }
      </div>
    </div>
  );
};

App.propTypes = {
}

export default App;
