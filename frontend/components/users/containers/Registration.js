import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import Layout from '../../layout/containers/Layout';
import { registration } from '../../../actions';

class Registration extends Component {
  state = {
    formErrors: {},
    fields: {},
  };

  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  handleValidation = () => {
    const { fields, formErrors } = this.state;
    let formIsValid = true;

    if(!fields['subject']){
      formIsValid = false;
      formErrors['subject'] = 'должно быть заполнено';
    }

    if(typeof fields['subject'] !== 'undefined'){
      if(!this.emailRegex.test(fields.subject)){
        formIsValid = false;
        formErrors['subject'] = 'email не валиден';
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

    if (!formIsValid) {
      this.setState({
        formErrors: formErrors,
      });
    }
    return formIsValid;
  };

  handleRegistration = (e) => {
    e.preventDefault();
    if(this.handleValidation()){
      const { history, registration } = this.props;
      const { fields } = this.state;
      registration(fields.subject, fields.password);
      history.push('/');
    }
  };

  handleChange = (field, e) => {
    this.setState({
      fields: {...this.state.fields, [field] :e.target.value},
    });
  };

  getField = (field) => {
    return field || '';
  };

  render() {
    console.log('RENDER <Registration>');

    const { fields, formErrors } = this.state;

    return (
      <Layout>
        <div className="auth">
          <div className="auth-content">
            <RegisterForm
              subjectValue={this.getField(fields['subject'])}
              subjectError={this.getField(formErrors['subject'])}
              passwordValue={this.getField(fields['password'])}
              passwordError={this.getField(formErrors['password'])}
              passConfirmValue={this.getField(fields['pass_confirm'])}
              passConfirmError={this.getField(formErrors['pass_confirm'])}
              handleSubmit={this.handleRegistration}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

Registration.propTypes = {
  registration: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  registration,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);