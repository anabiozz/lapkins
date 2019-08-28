import React from 'react'
import PropTypes from 'prop-types'

const Quantity = ({ cartItem, increaseCartItem, decreaseCartItem }) => {

	let handleChange = (event) => {
		// this.setState({quantity: event.target.value});
	}

	return (
		<div className="quantity">
			<a onClick={() => decreaseCartItem(cartItem.product)} className="quantity__minus"><span>-</span></a>
			<input onChange={handleChange} name="quantity" type="text" className="quantity__input" value={cartItem.count} />
			<a onClick = {() =>  increaseCartItem(cartItem.product)} className="quantity__plus"><span>+</span></a>
		</div>
	)
}

Quantity.propTypes = {
  cartItem: PropTypes.object.isRequired,
}

export default Quantity