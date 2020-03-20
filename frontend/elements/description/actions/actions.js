import {
  GET_VARIATION_REQUEST,
  GET_VARIATION_SUCCESS,
  GET_VARIATION_ERROR,
  GET_VARIATION_RESET,
  DISMISS_GET_VARIATION_ERROR,
} from '../constants';

import config from '../../../config';
import fetch from 'isomorphic-fetch';

const receiveSuccess = response => ({
  type: GET_VARIATION_SUCCESS,
  response,
});

const receiveFail = error => ({
  type: GET_VARIATION_ERROR,
  error,
});

export function reset() {
  return dispatch => dispatch({
    type: GET_VARIATION_RESET,
  });
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_GET_VARIATION_ERROR,
  });
}

export const getVariation = (variationID, sizeOptionID) => (dispatch) => {
  dispatch({
    type: GET_VARIATION_REQUEST,
  });

  fetch(`${config.apiDomain}/api/get-variation?variation_id=${variationID}&size_option_id=${sizeOptionID}`)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`);
    })
    .then(response => response.json())
    .then(response => dispatch(receiveSuccess(response)))
    .catch(error => dispatch(receiveFail(error)));
};

