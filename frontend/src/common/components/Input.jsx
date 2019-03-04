import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    name,
    title,
    inputType,
    value,
    handleChange,
    placeholder,
  } = props

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input
