import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {

  const onClickCustomer = (event) => {
    console.log(event.target);
    props.callbacksetSelectedCustomer(event.target)
  };

  return (
    <div className="customer">
      <h2>{props.name}</h2>
      <p>Rental Count: {props.movies_checked_out_count}</p>
      <button onClick={onClickCustomer} name={props.name} id={props.id}>{props.buttonTitle} </button>
    </div>
  )
}

  Customer.propTypes = {
    callbacksetSelectedCustomer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    movies_checked_out_count: PropTypes.number,
    buttonTitle: PropTypes.string,
    id: PropTypes.number
  };

export default Customer;
