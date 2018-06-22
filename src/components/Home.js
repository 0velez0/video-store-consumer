import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import no_returns from './no_returns.jpg';

class Home extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  };

  render() {

    return (
      <div>

      <img src={no_returns} alt="no_returns" className="image"/>
      </div>
    );
  }

  componentDidMount() {
    this.props.updateStatusCallback('');
  }
}

export default Home;
