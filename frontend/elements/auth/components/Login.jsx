import React from 'react';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import PropTypes from 'prop-types';

const Login = ({ handleSubmit, subjectValue, passwordValue, subjectError, passwordError, handleChange }) => {
  return (
    <div className='login'>
      <form onSubmit={(e) => handleSubmit(e, 'login')}>
        <div className="input-field">
          <Input
            title="Email или телефон"
            type="text"
            name="email"
            value={subjectValue}
            onChange={handleChange}
            error={subjectError}
          />
        </div>
        <div className="input-field">
          <Input
            title="Пароль"
            type="password"
            name="password"
            value={passwordValue}
            onChange={handleChange}
            error={passwordError}
          />
        </div>
        <div className="input-field">
          Forgot your password? No problem!
        </div>
        <div className="input-field">
          <Button title="Войти" />
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  subjectValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  subjectError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Login;