import React, {Fragment} from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthNav = ({ isLogin, handleLogout }) => {
  return (
    <div className="auth-nav">
      {
        isLogin && (
          <Link onClick={handleLogout} to="">
            <p>Выйти</p>
          </Link>
        )
      }
      {
        !isLogin && (
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

// AuthNav.propTypes = {
//   isLogin: PropTypes.bool.isRequired,
//   handleLogout: PropTypes.func.isRequired,
// };


export default AuthNav;