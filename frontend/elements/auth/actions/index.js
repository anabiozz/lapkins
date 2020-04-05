import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REFRESH_TOKEN,
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_SUCCESS,
  AUTH_ERROR_RESET
} from '../constants';
import config from '../../../config';

const registerSuccess = response => ({type: REGISTER_SUCCESS, response});
const registerFail = error => ({type: REGISTER_ERROR, error });

export const register = (subject, password, history) => dispatch => {
  dispatch({type: REGISTER});

  fetch(`${config.authDomain}/api/v1/auth/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'subject': subject,
      'password': password,
    })
  }).then((response) => {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
        }
        const error = (data && data.message) || response.statusText;
        throw new Error(`${error}`);
      }
      history.push('/');
      return data;
    });
  }).then(response => dispatch(registerSuccess(response)))
    .catch(error => dispatch(registerFail(error)));
};

export const resetError = () => async dispatch => dispatch({ type: AUTH_ERROR_RESET });

const refreshTokenSuccess = response => ({type: REFRESH_TOKEN_SUCCESS, response});
const refreshTokenFail = error => ({type: REFRESH_TOKEN_ERROR, error });

export const refreshToken = (token) => dispatch => {
  dispatch({type: REFRESH_TOKEN});

  fetch(`${config.authDomain}/api/v1/auth/refresh`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'token': token,
    })
  }).then((response) => {
    if (response.status === 200) {
      return response;
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`);
  })
    .then(response => response.json())
    .then(response => dispatch(refreshTokenSuccess(response)))
    .catch(error => dispatch(refreshTokenFail(error)));
};