import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const { name, title, type, state, onChange, placeholder } = props;

  return (
    <div className="input-element">
      <label htmlFor={name} className="input-label">{title}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={state.fields[name] || ''}
        onChange={(e) => onChange(name, e)}
        placeholder={state.errors[name] || placeholder }
      />
      {/*<span className="error">{state.errors[name]}</span>*/}
    </div>
  )
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input
