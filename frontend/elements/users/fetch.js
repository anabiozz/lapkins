import config from '../../config';

export const register = (subject, password) => {
  return fetch(`${config.apiDomain}/api/v1/users/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': subject,
      'password': password,
    })
  });
};

export const login = (subject, password) => {
  return fetch(`${config.apiDomain}/api/v1/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': subject,
      'password': password,
    })
  });
};

export const refreshToken = (token) => {
  return fetch(`${config.apiDomain}/api/v1/auth/refresh`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'token': token,
    })
  });
};