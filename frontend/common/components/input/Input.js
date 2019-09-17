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
    <div className="box">
      <label htmlFor={name} className="box__label">
        {title}
      </label>
      <input
        className="box__input"
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
