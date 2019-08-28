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

let domain = config.apiDomain + "/"
if (typeof window !== 'undefined') {
  domain = window.location.origin + "/"
}

// process.env.CORE_URL

console.log(domain);


export const getProductByID = productID => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_REQUEST,
  })

  fetch(`${domain}api/get-product-by-id?product_id=${productID}`)
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