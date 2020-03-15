import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';
import Input from "../../common/components/Input";

const PersonalData = ({ errors, values, onChange }) => {

	return <div className="personal-data">
		<div className="personal-data-title">Введите данные покупателя</div>
		<form name="contact-form" className="contact-form">
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Телефон"
						type="number"
						name="phone"
						value={values["phone"]}
						onChange={onChange}
						errors={errors}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Имя"
						type="text"
						name="firstName"
						value={values["firstName"]}
						onChange={onChange}
						errors={errors}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Фамилия"
						type="text"
						name="lastName"
						value={values["lastName"]}
						onChange={onChange}
						errors={errors}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Email"
						type="email"
						value={values["email"]}
						onChange={onChange}
						name="email"
						errors={errors}
					/>
				</div>
			</div>
		</form>
	</div>
};

export default PersonalData