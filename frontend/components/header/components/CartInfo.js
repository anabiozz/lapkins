import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CartInfo = ({ totalQuantity, totalPrice }) => {
	return (
		<div className="cart-info">
			<Link to="/cart">
				<img src="/static/images/cart.svg" alt="cart"/>
				<p>{ totalQuantity } шт.</p>
				<p>{ totalPrice } руб.</p>
			</Link>
		</div>
	);
};

CartInfo.propTypes = {
	totalPrice: PropTypes.number,
	totalQuantity: PropTypes.number,
};

export default CartInfo;