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
          <h1>VIDEO STORE</h1>
          <Status
            message={this.state.status.message}
            type={this.state.status.type}
          />
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/movies">Library</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies" component={Library}/>
            <Route path="/customers" component={Customers}/>
          </div>
            <Home updateStatusCallback={this.updateStatus}/>
        </div>
    </Router>
    );
  }
}

export default App;
