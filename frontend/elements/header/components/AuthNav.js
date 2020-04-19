import React, {Fragment} from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/login">
              <p>Войти</p>
            </NavLink>
            <NavLink to="/register">
             <p>Зарегистрироваться</p>
            </NavLink>
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