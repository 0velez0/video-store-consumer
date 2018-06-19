import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.image_url} alt={props.title}></img>
      <h3>{props.title}</h3>
    </div>
  )
}

  Movie.propTypes = {

  };

export default Movie;
