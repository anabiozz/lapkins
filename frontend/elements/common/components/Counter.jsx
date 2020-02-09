import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ addedItem, increaseCartItem, decreaseCartItem }) => {

	let handleChange = (event) => {
		// this.setState({quantity: event.target.value});
	};

	return (
		<div className="counter">
			<a onClick={() => decreaseCartItem(addedItem)} className="counter__minus"><span>-</span></a>
			<input onChange={handleChange} name="counter" type="text" className="counter__input" value={addedItem.quantity} />
			<a onClick = {() =>  increaseCartItem(addedItem)} className="counter__plus"><span>+</span></a>
		</div>
	)
};

Counter.propTypes = {
  addedItem: PropTypes.object.isRequired,
};

export default Counter;