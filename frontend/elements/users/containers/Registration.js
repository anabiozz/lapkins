import React, { Component, Fragment, useContext, useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import * as actions from '../fetch';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../_helpers/userState';
import { store } from '../../../store';

const Registration = () => {

  const [fields, setFields] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [error, serError] = useState(null);
  let history = useHistory();

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const handleValidation = () => {
    let formIsValid = true;

    if(!fields['subject']){
      formIsValid = false;
      formErrors['subject'] = 'должно быть заполнено';
    }

    if(typeof fields['subject'] !== 'undefined'){
      if(!emailRegex.test(fields.subject)){
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

    setFormErrors(formErrors);
    return formIsValid;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if(handleValidation()){
      actions.register(fields.subject, fields.password)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not login');
          }
          return response.json();
        })
        .then(() => {
          dispatch({type: 'SET_USER', value: {isLoggedIn: true}});
          history.push('/');
        })
        .catch(error => {
          serError(error);
        });
    }
  };

  const handleChange = (field, e) => {
    setFields({...fields, [field] :e.target.value});
  };

  const getField = (field) => {
    return field || '';
  };

  return (
    <Fragment>
      <div className="auth">
        <div className="auth-content">
          <RegisterForm
            subjectValue={getField(fields['subject'])}
            subjectError={getField(formErrors['subject'])}
            passwordValue={getField(fields['password'])}
            passwordError={getField(formErrors['password'])}
            passConfirmValue={getField(fields['pass_confirm'])}
            passConfirmError={getField(formErrors['pass_confirm'])}
            handleSubmit={handleRegistration}
            handleChange={handleChange}
          />
          <div className="error">
            <small>{error ? `Произошла ошибка: ${error}` : null}</small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Registration.propTypes = {
  history: PropTypes.object.isRequired,
  cookies: PropTypes.object.isRequired,
};

export default Registration;