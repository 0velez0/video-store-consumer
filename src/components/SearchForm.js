import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

  static propTypes = {
     addSearchCallback: PropTypes.func.isRequired
   };

  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addSearchCallback(this.state);

    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <section>
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
           type="text"
           name="title"
           value={this.state.title} onChange={this.onInputChange}
           />
        </div>
        <div>
          <input
           type="submit"
           value="Search"
           />
        </div>
      </form>
      </section>
    )
  }
}

export default SearchForm;
