import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import Movie from './Movie';


const BASE_URL = 'http://www.localhost:3000/movies?query=';

const POST_URL = 'http://www.localhost:3000/movies';

class Search extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('');
  }

  addToLibrary = (movie) => {
    console.log(movie)
    axios.post(POST_URL, movie)
    .then((response) => {
      console.log(response.data);
      this.props.updateStatusCallback('Successfully added to library!', 'success');
    })
    .catch((error) => {
      console.log(error.message);
      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  getInfo = (query) => {
    console.log(query.title);
    let url = BASE_URL +  query.title
    axios.get(url)
    .then((response) => {
      console.log('Success!');
      console.log(response.data);

      this.props.updateStatusCallback('Successfully loaded results!', 'success');

      // Do some pre-processing on the data
      this.setState({ results: response.data });
    })
    .catch((error) => {
      // console.log('Error :(');
      console.log(error);

      // Get something on the screen so the user knows
      this.props.updateStatusCallback(error.message, 'error');
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
        external_id={movie.external_id}
        buttonTitle = "Add to Library"
        callback={this.addToLibrary}
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
