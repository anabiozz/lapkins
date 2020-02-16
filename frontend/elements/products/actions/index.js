
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS, GET_PRODUCTS_RESET, DISMISS_PRODUCTS_ERROR,
} from '../constants'
import config from '../../../config';
import fetch from 'isomorphic-fetch';

const receiveSuccess = response => ({ type: GET_PRODUCTS_SUCCESS, response });
const receiveFail = error => ({ type: GET_PRODUCTS_ERROR, error });

export const reset = () => async dispatch => dispatch({ type: GET_PRODUCTS_RESET });
export const dismissError = () => async dispatch => dispatch({ type: DISMISS_PRODUCTS_ERROR });

export const getProducts = (type) => async dispatch => {
  dispatch({
    type: GET_PRODUCTS_REQUEST,
  });
  return fetch(`${config.apiDomain}/api/get-products?products_type=${type}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(receiveSuccess(response)))
    .catch(error => dispatch(receiveFail(error)))
};