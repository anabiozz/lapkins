import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, title }) => {
  return (
    <button className="btn-primary" onClick={action} id="submit" >{title}</button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Button;