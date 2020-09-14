import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { name, title, type, error, value, onChange, placeholder } = props;

  return (
    <div className="input-element">
      <label htmlFor={name} className="input-label">{title}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value ? value : ''}
        onChange={(e) => onChange(name, e)}
        placeholder={placeholder}
      />
      <small className="error">{error}</small>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Input;