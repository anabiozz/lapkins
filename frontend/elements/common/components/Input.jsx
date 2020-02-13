import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    name,
    title,
    type,
    value,
    onChange,
    placeholder,
  } = props

  return (
    <div className="input__element">
      <label htmlFor={name} className="input__label">
        {title}
      </label>
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Input
