import './../../../scss/artist.scss';

import React from 'react';

import Track from './../elements/Track';

const buildTrackList = props => {
  return Object.keys( props.tracks ).map( key => {
    return (
      <div className = "track-list-item" key = { key }>
        <Track
          { ...props.tracks[ key ] }
          trackClickHandler = { props.trackClickHandler }
        />
      </div>
    );
  });
};

const Artist = props => {
  return (
    <div className = 'artist'>
      <h2>Artist</h2>
      <div className = "grid">
        { props.artist.username }
        { props.tracks ? buildTrackList( props ) : null }
      </div>
    </div>
  );
}

export default Artist;
