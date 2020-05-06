import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/components/Input';

const PersonalData = ({ errors, values, onChange }) => {

	return <div className="personal-data">
		<div className="personal-data-title">Введите данные покупателя</div>
		<form name="contact-form" className="contact-form">
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Телефон"
						type="tel"
						pattern="^\d{1}(\d{3})\d{3}-\d{2}-\d{2}$"
						name="phone"
						value={values['phone']}
						onChange={onChange}
						error={errors['phone']}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Имя"
						type="text"
						name="firstName"
						value={values['firstName']}
						onChange={onChange}
						error={errors['firstName']}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Фамилия"
						type="text"
						name="lastName"
						value={values['lastName']}
						onChange={onChange}
						error={errors['lastName']}
					/>
				</div>
			</div>
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Email"
						type="email"
						value={values['email']}
						onChange={onChange}
						name="email"
						error={errors['email']}
					/>
				</div>
			</div>
		</form>
	</div>;
};

PersonalData.propTypes = {
	errors: PropTypes.object,
	values: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default PersonalData;