import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthNav = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="auth-nav">
      {
        isLoggedIn && (
          <Link onClick={handleLogout} to="">
            <p>Выйти</p>
          </Link>
        )
      }
      {
        !isLoggedIn && (
          <Fragment>
            <Link to="/login">
              <p>Войти</p>
            </Link>
            <Link to="/register">
             <p>Зарегистрироваться</p>
            </Link>
          </Fragment>
        )
      }
    </div>
  );
};

AuthNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};


export default AuthNav;