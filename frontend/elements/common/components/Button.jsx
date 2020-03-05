import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, title, value }) => {

  return (
    <button className="btn btn-content" onClick={action} value={value} id="submit" >{title}</button>
  )
};

Button.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Button;