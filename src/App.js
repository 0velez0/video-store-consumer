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

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <h1>VIDEO STORE</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/library">Library</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/library" component={Library}/>
          <Route path="/customers" component={Customers}/>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
