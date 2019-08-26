import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ action, type, title }) => {

  return (
    <button type="button" className={type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={action}>
      {title}
    </button>
  )
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button