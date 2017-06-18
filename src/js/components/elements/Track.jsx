import './../../../scss/track.scss'

import React from 'react';
import PropTypes from 'prop-types';

const Track = props => {
  const getMinutesSeconds = duration => {
    let minutes = Math.floor( duration / 60 );
    let seconds = duration % 60;

    return minutes + ' : ' + seconds;
  }

  return (
    <div
      className = 'track'
      onClick = { () => props.trackClickHandler( props ) }
    >
      <h3 className = "track-name">{ props.title }</h3>
      <img className = "track-image" src = { props.artwork_url } />
      <div className = "track-details">
        <p>Genre: { props.genre || 'not available' }</p>
        <p>Type: { props.type || 'not available' }</p>
        <p>Duration: { getMinutesSeconds( props.duration ) }</p>
        <p>Played: { props.playback_count } times</p>
        <p>{ props.description }</p>
      </div>
    </div>
  );
};

Track.propTypes = {
}

export default Track;
