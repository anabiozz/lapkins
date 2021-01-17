import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login, fetchCart } from '../../../actions';
import Layout from '../../layout/containers/Layout';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formErrors: {},
      fields: {},
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  handleValidation () {
    const {fields, formErrors} = this.state;
    this.setState({
      formErrors: {},
    });
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
  }

  handleLogin (e) {
    e.preventDefault();
    if(this.handleValidation()){
      const { history, login, fetchCart } = this.props;
      const { fields } = this.state;
      login(fields.subject, fields.password);
      fetchCart();
      history.push('/');
    }
  }

  handleLoginChange (field, e) {
    this.setState({
      fields: {...this.state.fields, [field]: e.target.value }
    });
  }

  render() {
    console.log('RENDER <Login>');

    const { fields, formErrors } = this.state;

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
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login,
  fetchCart,
};

export default connect(null, mapDispatchToProps)(Login);