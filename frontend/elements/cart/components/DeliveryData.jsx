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
					name="street"
					onChange={onChange}
					state={state}
				/>
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Кв."
					type="text"
					name="apartment"
					onChange={onChange}
					state={state}
				/>
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Дом"
					type="text"
					name="house"
					onChange={onChange}
					state={state}
				/>
			</div>
		</div>

		<div className="order-delivery">
				<p>При заказе от 4000 руб. доставка по всей России бесплатная.</p>
		</div>
		<div>В данный момент доставка осуществляется только в пределах Москвы</div>
	</div>
};

export default DeliveryData