import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Home.css';
// import anything else that is a child component

import CUSTOMERS from '/Users/maria/ada/full-stack/VideoStoreConsumer-API/db/seeds/customers.json';
import MOVIES from '/Users/maria/ada/full-stack/VideoStoreConsumer-API/db/seeds/movies.json';

const LOCAL_URL = " http://localhost:3001/"

class Home extends Component {

  static propTypes = {

    };

    constructor() {
      super();
      this.state = {
        movies: []
      };
    }

}

export default Home;
