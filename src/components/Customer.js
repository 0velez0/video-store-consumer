import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  return (
    <div className="customer">
      <h2>{props.name}</h2>
      <p>{props.movies_checked_out_count}</p>
      <button>{props.buttonTitle}</button>
    </div>
  )
}

  Customer.propTypes = {

  };

export default Customer;
