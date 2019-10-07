import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ cartItem, increaseCartItem, decreaseCartItem }) => {

	let handleChange = (event) => {
		// this.setState({quantity: event.target.value});
	}

	return (
		<div className="counter">
			<a onClick={() => decreaseCartItem(cartItem.product)} className="counter__minus"><span>-</span></a>
			<input onChange={handleChange} name="counter" type="text" className="counter__input" value={cartItem.count} />
			<a onClick = {() =>  increaseCartItem(cartItem.product)} className="counter__plus"><span>+</span></a>
		</div>
	)
}

Counter.propTypes = {
  cartItem: PropTypes.object.isRequired,
}

export default Counter