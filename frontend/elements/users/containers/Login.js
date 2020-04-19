import React, { Fragment, useState, useContext } from 'react';
import * as actions from '../fetch';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { useHistory } from 'react-router-dom';
import { store } from '../../../store';

const Login = props => {

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

  const handleLogin = (e) => {
    e.preventDefault();
    if(handleValidation()){
      actions.login(fields.subject, fields.password)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not login');
          }
          return response.json();
        })
        .then(() => {
          dispatch({type: 'SET_USER', value: true});
          history.push('/');
        })
        .catch(error => {
          serError(error);
        });
    }
  };

  const handleLoginChange = (field, e) => {
    setFields({...fields, [field]: e.target.value });
  };

  const getLoginField = (field) => {
    return field || '';
  };

  return (
    <Fragment>
      <div className="auth">
        <div className="auth-content">
          <LoginForm
            subjectValue={getLoginField(fields['subject'])}
            subjectError={getLoginField(formErrors['subject'])}
            passwordValue={getLoginField(fields['password'])}
            passwordError={getLoginField(formErrors['password'])}
            handleChange={handleLoginChange}
            handleSubmit={handleLogin}
          />
          <div className="error">
            <small>{error ? `Произошла ошибка: ${error}` : null}</small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Login.propTypes = {
//   history: PropTypes.object.isRequired,
//   cookies: PropTypes.object.isRequired,
// };

export default Login;