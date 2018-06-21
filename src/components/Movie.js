import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {

  const onClickMovie = (event) => {
    let movie = {
      title: props.title,
      overview: props.overview,
      release_date: props.release_date,
      image_url: props.image_url,
      external_id: props.external_id
    }
    props.callback(movie);
  };


  return (
    <div className="movie">
    <img src={`${props.image_url}`} alt={props.title}></img>
    <h3>{props.title}</h3>
    <h4>{props.release_date}</h4>
    <button onClick={onClickMovie} title={props.title}>{props.buttonTitle} </button>
    </div>
  )
}

Movie.propTypes = {

};

export default Movie;
