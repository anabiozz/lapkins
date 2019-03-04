import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = (props) => {
  const {
    name,
    handleChange,
    selectedOptions,
  } = props

  retutn(
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <div className="checkbox">
        {options.map(option => (
          <label htmlFor={name} key={option} className="checkbox-inline">
            <input
              id={name}
              name={name}
              onChange={handleChange}
              value={option}
              checked={selectedOptions.indexOf(option) > -1}
              type="checkbox"
            />
            {option}
          </label>
        ))}
      </div>
    </div>,
  )
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  selectedOptions: PropTypes.string.isRequired,
}

export default CheckBox
