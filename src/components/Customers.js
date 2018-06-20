import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';
import './Customers.css';


const BASE_URL = 'http://www.localhost:3000';

class Customers extends Component {
  static propTypes = {

  };

  constructor() {
    super();

    // Set state to the static data from props
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
  //   this.getMovies(BASE_URL)
  // }
    // getMovies(url) {


    // this.props.updateStatusCallback('Loading movies...', 'success');

    axios.get(BASE_URL + '/customers')
      .then((response) => {
        console.log('Success!');
        console.log(response);

        // this.props.updateStatusCallback('Successfully loaded movies!', 'success');

        // Do some pre-processing on the data
        const customersList = response.data;
        this.setState({ customers: customersList });
      })
      .catch((error) => {
        // console.log('Error :(');
        console.log(error);

        // this.props.updateStatusCallback(error.message, 'error');
      });
    }


  render() {

    const customers = this.state.customers.map((customer, index) => {
      console.log(customers);
      return <Customer key={index}
        name={customer.name}
        registrated_at={customer.registrated_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        movies_checked_out_count={customer.movies_checked_out_count}
        buttonTitle = "Select for Rental" // TODO
        />
      });


    return (
      <section>
        <div className="customers">{ customers }</div>
      </section>

    )
  }
}

export default Customers;
