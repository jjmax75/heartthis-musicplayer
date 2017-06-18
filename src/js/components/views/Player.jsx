import './../../../scss/player.scss';

import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = props => {
  return (
    <div className = 'player'>
      <h2>Player</h2>
      <div className = "grid">
        <ReactAudioPlayer
          src = { props.activeTrack.stream_url }
          autoPlay
          controls
        />
      </div>
    </div>
  );
}

export default Player;
