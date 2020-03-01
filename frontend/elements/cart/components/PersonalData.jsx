import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';
import Input from "../../common/components/Input";

const PersonalData = ({ state, onChange }) => {

	return <div className="personal-data">
		<div className="personal-data-title">
			Введите данные покупателя
		</div>
		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Телефон"
					type="tel"
					name="phone"
					onChange={onChange}
					required=""
					value={state.inputs.phone}
					aria-required="true" />
			</div>
		</div>
		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Имя"
					type="text"
					name="name"
					onChange={onChange}
					required=""
					value={state.inputs.name}
					aria-required="true" />
			</div>
		</div>
		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Фамилия"
					type="text"
					name="surname"
					onChange={onChange}
					required=""
					value={state.inputs.surname}
					aria-required="true" />
			</div>
		</div>
		<div className="fields-line">
			<div className="field-group">
				<Input
					title="Email"
					type="text"
					onChange={onChange}
					name="email"
					required=""
					value={state.inputs.email}
					aria-required="true" />
			</div>
		</div>
	</div>
};

export default PersonalData