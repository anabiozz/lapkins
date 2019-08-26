import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  const {
    title,
    name,
    value,
    handleChange,
    placeholder,
    options,
  } = props

  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
}

export default Select
