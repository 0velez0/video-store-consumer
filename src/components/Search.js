import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Movie from './Movie';


const BASE_URL = 'http://www.localhost:3000/movies?query=';

const POST_URL = 'http://www.localhost:3000/movies';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  addToLibrary = (movie) => {
    console.log(movie)
    axios.post(POST_URL, movie)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
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
