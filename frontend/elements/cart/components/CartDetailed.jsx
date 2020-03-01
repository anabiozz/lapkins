import React from 'react'
import PropTypes from 'prop-types'

const CartDetailed = ({ numberOfItems, orderPrice }) => {

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
			</div>
		</div>
	)
};

// CartDetailed.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	handleChange: PropTypes.string.isRequired,
// 	selectedOptions: PropTypes.string.isRequired,
// };

export default CartDetailed
