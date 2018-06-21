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
      },
      selectedCustomerName: '',
      selectedCustomerId: '',
      selectedMovieTitle: '',
      selectedMovieId: ''
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

  setSelectedMovie = (movie) => {
    this.setState({
      selectedMovieTitle: movie.title,
      selectedMovieId: movie.id
    })
  }

  setSelectedCustomer = (customer) => {
    console.log(customer);
    this.setState({
      selectedCustomerName: customer.name,
      selectedCustomerId: customer.id
    })
  }

  // post "/rentals/:title/check-out", to: "rentals#check_out", as: "check_out"

  render() {
    return (
      <Router>
        <div>

          <h1>D & M VIDEO STORE</h1>
            <h4>Selected Customer: {this.state.selectedCustomerName}</h4>
            <h4>Selected Movie: {this.state.selectedMovieTitle}</h4>
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/movies">LIBRARY</NavLink></li>
            <li><NavLink to="/customers">CUSTOMERS</NavLink></li>
            <li><NavLink to="/search">SEARCH</NavLink></li>
          </ul>
          <Status
          message={this.state.status.message}
          type={this.state.status.type}
          />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies"
            render = {() => {
              return (<Library callbacksetSelectedMovie={this.setSelectedMovie}
              updateStatusCallback={this.updateStatus}/>)
            }}/>
            <Route path="/customers"
            render = {() => {
              return (<Customers callbacksetSelectedCustomer={this.setSelectedCustomer}
                updateStatusCallback={this.updateStatus}/>)
            }}/>
          </div>
        </div>
    </Router>
    );
  }
}

export default App;
