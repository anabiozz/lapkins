
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { user: initialLogin, children } = props;


  // Use State to keep the values
  const [user, setUser, ] = useState(initialLogin);

  // Make the context object:
  const userContext = {
    user,
    setUser
  };

  // pass the value in provider and return
  return <Context.Provider value={userContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  user: PropTypes.bool,
};

Provider.defaultProps = {
  user: false,
};