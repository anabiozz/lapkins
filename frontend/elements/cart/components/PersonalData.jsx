import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';
import Input from "../../common/components/Input";

const PersonalData = ({ state, onChange }) => {

	return <div className="personal-data">
		<div className="personal-data-title">Введите данные покупателя</div>
		<form name="contact-form" className="contact-form">
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Телефон"
						type="number"
						name="phone"
						onChange={onChange}
						state={state}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Имя"
						type="text"
						name="name"
						onChange={onChange}
						state={state}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Фамилия"
						type="text"
						name="surname"
						onChange={onChange}
						state={state}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Email"
						type="text"
						onChange={onChange}
						name="email"
						state={state}
					/>
				</div>
			</div>
		</form>
	</div>
};

export default PersonalData