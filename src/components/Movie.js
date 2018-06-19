import React from 'react';
import PropTypes from 'prop-types';


const Movie = (props) => {
  return (
    <div>
    <h2>{props.title}</h2>
      <img src={props.image_url} alt={props.title}></img>
    </div>
  )
}

  Movie.propTypes = {

  };

export default Movie;
