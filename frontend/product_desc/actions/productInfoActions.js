import {
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_ERROR,
  GET_PRODUCT_BY_ID_RESET,
  DISMISS_GET_PRODUCT_BY_ID_ERROR,
} from '../constants'

import config from '../../config'
require('isomorphic-fetch');

const receiveSuccess = response => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  response,
})

const receiveFail = error => ({
  type: GET_PRODUCT_BY_ID_ERROR,
  error,
})

let domain = config.apiDomain + process.env.CORE_URL
// if (typeof window !== 'undefined') {
//   console.log(window.location.origin);
//   domain = window.location.origin + process.env.CORE_URL
// }

// process.env.CORE_URL

export const getProductByID = product_id => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_REQUEST,
  })

  fetch(`${domain}api/get-product-by-id?product_id=${product_id}`)
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

export const getProductVariantByID = (product_variant_id, size) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_REQUEST,
  })

  fetch(`${domain}api/get-product-variant-by-id?product_variant_id=${product_variant_id}&size=${size}`)
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

export function reset() {
  return dispatch => dispatch({
    type: GET_PRODUCT_BY_ID_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_GET_PRODUCT_BY_ID_ERROR,
  })
}