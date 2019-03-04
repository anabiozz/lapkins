import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../constants'
import config from '../../config'

const receiveSuccess = response => ({ type: GET_PRODUCTS_SUCCESS, response })
const receiveFail = error => ({ type: GET_PRODUCTS_ERROR, error })

export const getProducts = () => (dispatch, getState) => {
  dispatch({
    type: GET_PRODUCTS_REQUEST,
  })

  let domain = config.baseDomain + process.env.CORE_URL
  if (typeof window !== 'undefined') {
    domain = window.location.origin + process.env.CORE_URL
  }

  return fetch(`${domain}api/get-products?products_type=1`)
    .then((response) => {
      if (response.status == 200) {
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
    type: GET_REGIONS_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_REGIONS_ERROR,
  })
}
