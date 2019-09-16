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
   <div className="select-box">
      {/* <label htmlFor={name}>{title}</label> */}
      <select id={name} name={name} value={value} onChange={handleChange}>
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
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
}

export default Select


