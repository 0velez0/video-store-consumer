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
    <section className="movie">
    <div>
      <img src={`${props.image_url}`} alt={props.title}></img>
      <h3>{props.title}</h3>
      <h4>{props.release_date}</h4>
      <button onClick={onClickMovie} title={props.title}>{props.buttonTitle} </button>
      </div>
      <div className="scroll">
        {props.overview}
      </div>
    </section>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  image_url: PropTypes.string,
  external_id: PropTypes.number,
  release_date: PropTypes.string,
  callback: PropTypes.func,
  buttonTitle: PropTypes.string
};

export default Movie;
