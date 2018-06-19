import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

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
    // this.props.updateStatusCallback('Loading movies...', 'success');

    axios.get(BASE_URL + '/movies')
      .then((response) => {
        console.log('Success!');
        console.log(response);

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
      console.log(movies);
      return <Movie key={index}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        />
      });

    return (
      <section>
        <div>
          <h2>Library</h2>
        </div>
        <div>{ movies }</div>
      </section>
    )
  }
}

export default Library;
