import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { setUserFields, setUserFormErrors, login, resetUserFormErrors } from '../../../actions';
import Layout from '../../layout/containers/Layout';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleValidation = this.handleValidation.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  handleValidation () {
    const {fields, resetUserFormErrors, formErrors} = this.props;
    resetUserFormErrors();
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
      this.props.setUserFormErrors(formErrors);
    }

    return formIsValid;
  }

  handleLogin (e) {
    e.preventDefault();
    if(this.handleValidation()){
      const {fields, history, login} = this.props;
      login(fields.subject, fields.password);
      history.push('/');
    }
  }

  handleLoginChange (field, e) {
    this.props.setUserFields({...this.props.fields, [field]: e.target.value });
  }

  render() {
    console.log('RENDER <Login>');

    const { fields, formErrors } = this.props;

    return (
      <Layout>
        <div className="auth">
          <div className="auth-content">
            {/*{*/}
            {/*  !R.isEmpty(formErrors) && <div className="error">*/}
            {/*    <small>*/}
            {/*      {*/}
            {/*        Object.keys(formErrors).map((key, i) => (*/}
            {/*          <div key={i}>{`Произошла ошибка: ${formErrors[key]}\n`}</div>*/}
            {/*        ))*/}
            {/*      }*/}
            {/*    </small>*/}
            {/*  </div>*/}
            {/*}*/}
            {
              <LoginForm
                subjectValue={fields['subject']}
                subjectError={formErrors['subject']}
                passwordValue={fields['password']}
                passwordError={formErrors['password']}
                handleChange={this.handleLoginChange}
                handleSubmit={this.handleLogin}
              />
            }
          </div>
        </div>
      </Layout>
    );
  }
}

Login.propTypes = {
  fields: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  setUserFields: PropTypes.func.isRequired,
  setUserFormErrors: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  resetUserFormErrors: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  setUserFields,
  setUserFormErrors,
  login,
  resetUserFormErrors,
};

const mapStateToProps = (state, ownProps) => ({
  formErrors: state.user.formErrors,
  fields: state.user.fields,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);