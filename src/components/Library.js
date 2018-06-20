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

  componentDidMount() {
  //   this.getMovies(BASE_URL)
  // }
    // getMovies(url) {


    // this.props.updateStatusCallback('Loading movies...', 'success');

    axios.get(BASE_URL + '/movies')
      .then((response) => {
        console.log('Success!');
        console.log(response);

        // this.props.updateStatusCallback('Successfully loaded movies!', 'success');

        // Do some pre-processing on the data
        const moviesList = response.data;
        this.setState({ movies: moviesList });
        console.log(this.state)
      })
      .catch((error) => {
        // console.log('Error :(');
        console.log(error);

        // Get something on the screen so the user knows
        // this.props.updateStatusCallback(error.message, 'error');
      });
    }

  render() {
    console.log(this.props.callback);
    const movies = this.state.movies.map((movie, index) => {
      console.log(movies);
      return <Movie key={index}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        buttonTitle = "Select for Rental"
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
