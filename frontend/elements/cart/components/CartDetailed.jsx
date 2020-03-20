import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/components/Button';

const CartDetailed = ({ numberOfItems, orderPrice, checkout }) => {

	return(
		<div className="cart-detailed">
			<div className="cart-detailed-content">

				<h3>Информация о заказе</h3>

				<div className="order-cost">
					<div className="title">Кол-во товаров:</div>
					<div className="value">{numberOfItems}</div>
				</div>

				<div className="order-cost">
					<div className="title">Сумма заказа:</div>
					<div className="value">{orderPrice}</div>
				</div>

				<div className="order-cost">
					<Button title="Оформить заказ" action={(e) => checkout(e)} />
				</div>

			</div>
		</div>
	);
};

CartDetailed.propTypes = {
	numberOfItems: PropTypes.number.isRequired,
	orderPrice: PropTypes.number.isRequired,
	checkout: PropTypes.func.isRequired,
};

export default CartDetailed;
