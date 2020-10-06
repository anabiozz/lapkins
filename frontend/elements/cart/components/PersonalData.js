import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/Input';

const PersonalData = ({ errors, values, onChange, onLoad }) => {
	return <div className="personal-data">
		<div className="personal-data-title">Введите данные покупателя</div>
		<form name="contact-form" className="contact-form">
			<div className="fields-line">
				<div className="field-group">
					<Input
						title="Телефон"
						type="tel"
						name="phone"
						value={values['phone']}
						onChange={onChange}
						onLoad={onLoad}
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
						onLoad={onLoad}
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
						onLoad={onLoad}
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
						onLoad={onLoad}
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