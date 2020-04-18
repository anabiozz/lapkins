import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const CartInfo = ({ info }) => {
	return (
		<div className="cart-info">
			<NavLink to="/cart">
				<img src="/static/images/cart.svg" alt="cart"/>
				<p>{ info ? info.quantity : 0} шт.</p>
				<p>{ info ? info.price : 0} руб.</p>
			</NavLink>
		</div>
	);
};

CartInfo.propTypes = {
	info: PropTypes.object,
};

export default CartInfo;