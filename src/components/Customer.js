import React from 'react';
import PropTypes from 'prop-types';


const Customer = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.movies_checked_out_count}</p>
    </div>
  )
}

  Customer.propTypes = {

  };

export default Customer;
