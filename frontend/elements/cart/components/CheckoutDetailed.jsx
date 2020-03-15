import React from 'react'
import PropTypes from 'prop-types'
import Input from "../../common/components/Input";
import CartProductItem from "./CartProductItem";

const CheckoutDetailed = ({ numberOfItems, orderPrice, state }) => {

	return(
		<div className="checkout-detailed">
			<div className="checkout-detailed-content">
				<h3>Информация о заказе</h3>
				<div className="order-cost">
					<div className="title">Кол-во товаров:</div>
					<div className="value">{numberOfItems}</div>
				</div>

				<div className="order-cost">
					<div className="title">Доставка:</div>
					<div className="value">
						{!state.isDelivery ? "Бесплатно" : "Заполните адрес"}
					</div>
				</div>

				<div className="order-cost">
					<div className="title">Итого:</div>
					<div className="value">{orderPrice}</div>
				</div>
			</div>
		</div>
	)
};

// CartProductItem.propTypes = {
// 	product: PropTypes.object.isRequired,
// 	removeProduct: PropTypes.func.isRequired,
// 	increaseProductQuantity: PropTypes.func.isRequired,
// 	decreaseProductQuantity: PropTypes.func.isRequired,
// };
export default CheckoutDetailed
