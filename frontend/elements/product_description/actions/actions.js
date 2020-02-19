import {
  GET_VARIANT_REQUEST,
  GET_VARIANT_SUCCESS,
  GET_VARIANT_ERROR,
  GET_VARIANT_RESET,
  DISMISS_GET_VARIANT_ERROR,
} from '../constants'

import config from '../../../config'
import fetch from 'isomorphic-fetch';

const receiveSuccess = response => ({
  type: GET_VARIANT_SUCCESS,
  response,
});

const receiveFail = error => ({
  type: GET_VARIANT_ERROR,
  error,
});

export function reset() {
  return dispatch => dispatch({
    type: GET_VARIANT_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_GET_VARIANT_ERROR,
  })
}

export const getVariant = (variant_id, size_option_id) => (dispatch) => {
  dispatch({
    type: GET_VARIANT_REQUEST,
  });

  fetch(`${config.apiDomain}/api/get-variant?variant_id=${variant_id}&size_option_id=${size_option_id}`)
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

