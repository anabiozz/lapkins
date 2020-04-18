
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { login: initialLogin, children } = props;


  // Use State to keep the values
  const [login, setLogin] = useState(initialLogin);

  const addNewLogin = value => {
    setLogin(value);
  };

  // Make the context object:
  const loginContext = {
    login,
    setLogin,
    addNewLogin
  };

  // pass the value in provider and return
  return <Context.Provider value={loginContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  login: PropTypes.bool,
};

Provider.defaultProps = {
  login: false,
};