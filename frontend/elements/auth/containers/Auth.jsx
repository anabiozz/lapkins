import React, { Component, Fragment } from 'react';
import Tabs from '../../common/components/Tabs';
import Registration from '../components/Registration';
import Login from '../components/Login';
import { connect } from 'react-redux';
import * as actions from '../../auth/actions';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 'Войти',
			fields: {},
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onClickTabItem = this.onClickTabItem.bind(this);
	}

	emailRegex = RegExp(
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);

	componentWillUnmount() {
		this.props.resetError();
	}

	handleValidation(){
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if(!fields['subject']){
			formIsValid = false;
			errors['subject'] = 'должно быть заполнено';
		}

		if(typeof fields['subject'] !== 'undefined'){
			if(!this.emailRegex.test(fields.subject)){
				formIsValid = false;
				errors['subject'] = 'email не валиден';
			}
		}

		// if(!fields['password']){
		// 	formIsValid = false;
		// 	errors['lastName'] = 'должно быть заполнено';
		// }
		//
		// if(typeof fields['password'] !== 'undefined'){
		// 	if(!fields['password'].match(/^[a-zA-Zа-яА-Я]+$/)){
		// 		formIsValid = false;
		// 		errors['password'] = 'только буквы';
		// 	}
		// }

		this.setState({errors: errors});
		return formIsValid;
	}

	handleSubmit(e, formType){
		e.preventDefault();
		if(this.handleValidation()){
			if (formType === 'registry') {
				this.props.register(this.state.fields.subject, this.state.fields.password, this.props.history);
			}
		}
	}

	handleChange(field, e){
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({fields});
	}

	onClickTabItem(tab) {
		if (this.props.error) this.props.resetError();
		this.setState({ errors: {}})
		this.setState({ activeTab: tab });
	}

	getField(field) {
		return field || '';
	}

	render() {

		const { error } = this.props;

		return (
			<Fragment>
				<div className="auth">
					<div className="auth-content">
						<Tabs onClick={this.onClickTabItem} activeTab={this.state.activeTab}>
							<div label="Войти">
								<Login
									subjectValue={this.getField(this.state.fields['subject'])}
									subjectError={this.getField(this.state.errors['subject'])}
									passwordValue={this.getField(this.state.fields['password'])}
									passwordError={this.getField(this.state.errors['password'])}
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
								/>
							</div>
							<div label="Регистрация">
								<Registration
									subjectValue={this.getField(this.state.fields['subject'])}
									subjectError={this.getField(this.state.errors['subject'])}
									passwordValue={this.getField(this.state.fields['password'])}
									passwordError={this.getField(this.state.errors['password'])}
									passConfirmValue={this.getField(this.state.fields['pass_confirm'])}
									passConfirmError={this.getField(this.state.errors['pass_confirm'])}
									handleSubmit={this.handleSubmit}
									handleChange={this.handleChange}
								/>
							</div>
						</Tabs>
						<div className="error">
							<small>{error ? `Произошла ошибка: ${error}` : null}</small>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

Auth.propTypes = {
	register: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	resetError: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	cookies: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
	token: state.auth.token,
	error: state.auth.error,
	fetching: state.auth.fetching,
	cookies: ownProps.cookies,
});

export default withRouter(withCookies(connect(mapStateToProps, { ...actions })(Auth)));