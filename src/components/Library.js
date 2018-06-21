import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Library.css';
// import Status from './Status';


const BASE_URL = 'http://www.localhost:3000';

class Library extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  };

  constructor() {
    super();

    // Set state to the static data from props
    this.state = {
      movies: []
    };
  }

  selectedMovie = (movie) => {
    this.props.callbacksetSelectedMovie(movie);
  }

  componentDidMount() {
  //   this.getMovies(BASE_URL)
  // }
    // getMovies(url) {

    // this.props.updateStatusCallback('Loading movies...', 'success');
    axios.get(BASE_URL + '/movies')
      .then((response) => {
        console.log('Success!');

        // this.props.updateStatusCallback('Successfully loaded movies!', 'success');

        // Do some pre-processing on the data
        const moviesList = response.data;
        this.setState({ movies: moviesList });
      })
      .catch((error) => {
        // console.log('Error :(');
        console.log(error);

        // Get something on the screen so the user knows
        // this.props.updateStatusCallback(error.message, 'error');
      });
    }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}
        buttonTitle = "Select for Rental"
        callback={this.selectedMovie}
        />

      });

    return (
      <section>
        <div className="library">{ movies }</div>
      </section>
    )
  }
}

export default Library;
