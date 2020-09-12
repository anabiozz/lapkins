import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, minusFunc, plusFunc }) => {

	return (
		<div className="counter">
			<a onClick={minusFunc} className="counter__minus"><span>-</span></a>
			<input
				name="counter"
				type="text"
				className="counter__input"
				value={value ? value : ''} />
			<a onClick = {plusFunc} className="counter__plus"><span>+</span></a>
		</div>
	);
};

Counter.propTypes = {
	minusFunc: PropTypes.func.isRequired,
	plusFunc: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
};

export default Counter;