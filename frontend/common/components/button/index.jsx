import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ action, type, title }) => {

  return (
    <div class="btn btn-three" onClick={action}>
      <span>{title}</span>
    </div>
  )
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button