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
    <div className="box">
      <label htmlFor={name} className="box__label">
        {title}
      </label>
      <input
        className="box__input"
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
