
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../constants'
import config from '../../config';
import fetch from 'isomorphic-fetch'

const receiveSuccess = response => ({ type: GET_PRODUCTS_SUCCESS, response })
const receiveFail = error => ({ type: GET_PRODUCTS_ERROR, error })

export function reset() {
  return dispatch => dispatch({
    type: GET_REGIONS_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_REGIONS_ERROR,
  })
}

export const getProducts = (type = 1) => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_REQUEST,
  })

  let domain = config.apiDomain + process.env.CORE_URL
  // if (typeof window !== 'undefined') {
  //   console.log(window.location);
  //   domain = window.location.origin + process.env.CORE_URL
  // }

  return fetch(`${domain}api/get-products?products_type=${type}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(receiveSuccess(response)))
    .catch(error => dispatch(receiveFail(error)))
}