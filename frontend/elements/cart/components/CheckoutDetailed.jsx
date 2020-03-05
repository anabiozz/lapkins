import React from 'react'
import PropTypes from 'prop-types'
import Input from "../../common/components/Input";

const CheckoutDetailed = ({ numberOfItems, orderPrice, state, onChange }) => {

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

				{/*<div className="order-cost">*/}
				{/*	<Input*/}
				{/*		type="text"*/}
				{/*		name="promocode"*/}
				{/*		required=""*/}
				{/*		onChange={onChange}*/}
				{/*		value={state.inputs.promocode}*/}
				{/*		aria-required="true"*/}
				{/*		placeholder="Промокод" />*/}
				{/*</div>*/}

				<div className="order-cost">
					<div className="title">Итого:</div>
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

export default CheckoutDetailed
