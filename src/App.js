import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Customers from "./components/Customers";
import Status from './components/Status';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      status: {
        message: 'loaded the page',
        type: 'success'
      }
    };
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <h1>D & M VIDEO STORE</h1>

          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/movies">LIBRARY</NavLink></li>
            <li><NavLink to="/customers">CUSTOMERS</NavLink></li>
            <li><NavLink to="/search">SEARCH</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies" component={Library}/>
            <Route path="/customers" component={Customers}/>
          </div>
          </div>
    </Router>
    );
  }
}

export default App;
