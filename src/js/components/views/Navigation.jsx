import './../../../scss/navigation.scss';

import React from 'react';

const Navigation = props => {
  return (
    <div className = 'navigation'>
      <span
        className = 'nav-link'
        onClick = { () => props.navClickHandler( 'artistList' ) }
      >Top Artists</span>
      { props.activeArtist ?
        <span
          className = 'nav-link'
          onClick = { () => props.navClickHandler( 'artist' ) }
        > - Artist</span> : undefined
      }
      { props.activeTrack ?
        <span
          className = 'nav-link'
          onClick = { () => props.navClickHandler( 'player' ) }
        > - Player</span> : undefined
      }
    </div>
  );
}

export default Navigation;
