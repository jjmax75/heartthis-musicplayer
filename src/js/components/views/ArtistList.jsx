import './../../../scss/artistList.scss';

import React from 'react';

import Artist from './../elements/Artist';

const buildArtistList = props => {
  return Object.keys( props.artists ).map( key => {
    return (
      <div className = "artist-list-item" key = { key }>
        <Artist
          { ...props.artists[ key ] }
          artistClickHandler = { props.artistClickHandler }
        />
      </div>
    );
  });
};

const ArtistList = props => {
  return (
    <div className = 'artist-list'>
      <h2>Artist List</h2>
      <div className = "grid">
        { buildArtistList( props ) }
      </div>
    </div>
  );
}

export default ArtistList;
