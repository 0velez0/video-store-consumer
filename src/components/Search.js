import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import Movie from './Movie';


const BASE_URL = 'http://www.localhost:3000/movies?query=';

class Search extends Component {
  static propTypes = {

  };

  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  getInfo = (query) => {
    console.log(query.title);
    let url = BASE_URL +  query.title
    axios.get(url)
    .then((response) => {
      console.log('Success!');
      console.log(response.data);

      // this.props.updateStatusCallback('Successfully loaded movies!', 'success');

      // Do some pre-processing on the data
      this.setState({ results: response.data });
    })
    .catch((error) => {
      // console.log('Error :(');
      console.log(error);

      // Get something on the screen so the user knows
      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {
    const movies = this.state.results.map((movie, index) => {
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
        </div>
        <div>
          <SearchForm addSearchCallback={this.getInfo}/>
          {movies}
        </div>
      </section>
    )
  }
}

export default Search;
