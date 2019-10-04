import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  const {
    error,
    name,
    value,
    handleChange,
    placeholder,
    options,
  } = props

  return (
   <div className="select-box">
      {/* <label htmlFor={name}>{title}</label> */}
      <select className={error ? "select__error" : ""} id={name} name={name} value={value} onChange={handleChange} >
        <option value="" disabled >{placeholder}</option> 
        {
          options && options.map((option, i) => (
            <option key={i} value={option} label={option}>{option}</option>
          ))
        }
      </select>
    </div> 
  )
}

Select.propTypes = {
  error: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Select


