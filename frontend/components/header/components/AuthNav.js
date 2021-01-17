import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as R from 'ramda';

const AuthNav = ({ user, handleLogout }) => {
  return (
    <div className="auth-nav">
      {
        !R.isEmpty(user) && (
          <Link onClick={handleLogout} to="">
            <p>Выйти</p>
          </Link>
        )
      }
      {
        R.isEmpty(user) && (
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
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};


export default AuthNav;