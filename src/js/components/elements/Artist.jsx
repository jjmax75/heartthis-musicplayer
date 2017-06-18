import './../../../scss/artist.scss'

import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  return (
    <div
      className = 'artist'
      onClick = { event => props.artistClickHandler ( props.id, props.permalink ) }
    >
      <h3 className = "artist-name">{ props.username }</h3>
      <img className = "artist-image" src = { props.avatar_url } />
      <div className = "artist-details">
        <p>{ props.track_count } tracks</p>
        <p>Location: { props.geo }</p>
        <p>{ props.description }</p>
      </div>
    </div>
  );
};

Item.propTypes = {
}

export default Item;
