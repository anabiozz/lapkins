import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/components/Button';

const CartDetailed = ({ qty, price, checkout }) => {

	return(
		<div className="cart-detailed">
			<div className="cart-detailed-content">

				<h3>Информация о заказе</h3>

				<div className="order-cost">
					<div className="title">Кол-во товаров:</div>
					<div className="value">{qty}</div>
				</div>

				<div className="order-cost">
					<div className="title">Сумма заказа:</div>
					<div className="value">{price}</div>
				</div>

				<div className="order-cost">
					<Button title="Оформить заказ" action={checkout} />
				</div>

			</div>
		</div>
	);
};

CartDetailed.propTypes = {
	qty: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	checkout: PropTypes.func.isRequired,
};

export default CartDetailed;
