import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/Input';

const DeliveryData = ({ errors, values, onChange, onLoad }) => {

	return <div className='delivery-data'>
		<div className="delivery-data-title">
			Заполните адрес доставки
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Улица"
					type="text"
					name="street"
					value={values['street']}
					onChange={onChange}
					onLoad={onLoad}
					error={errors['street']}
				/>
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Кв."
					type="text"
					name="apartment"
					value={values['apartment']}
					onChange={onChange}
					onLoad={onLoad}
					error={errors['apartment']}
				/>
			</div>
		</div>

		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Дом"
					type="text"
					name="house"
					value={values['house']}
					onChange={onChange}
					onLoad={onLoad}
					error={errors['house']}
				/>
			</div>
		</div>
	</div>;
};

DeliveryData.propTypes = {
	errors: PropTypes.object,
	values: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default DeliveryData;