import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';
import Input from "../../common/components/Input";

const DeliveryData = ({ state, onChange }) => {

	return <div className={state.isDelivery ? 'delivery-data' : 'delivery-data hide'}>
		<div className="delivery-data-title">
			Заполните адрес доставки
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Улица"
					type="text"
					onChange={onChange}
					name="street"
					required=""
					value={state.inputs.street}
					aria-required="true" />
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Кв."
					type="text"
					name="apartment"
					required=""
					onChange={onChange}
					value={state.inputs.apartment}
					aria-required="true" />
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Дом"
					type="text"
					name="house"
					required=""
					onChange={onChange}
					value={state.inputs.house}
					aria-required="true" />
			</div>
		</div>

		<div className="order-delivery">
				<h3>Выберите способ доставки</h3>
				<p>При заказе от 4000 руб. доставка по всей России бесплатная.</p>
				<input type="hidden" name="deliverySum" id="deliverySum" value="" />
		</div>
		<div>В данный момент доставка осуществляется только в пределах Москвы</div>
	</div>
};

export default DeliveryData