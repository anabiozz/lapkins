
import { 
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_ERROR,
	DISMISS_GET_CATEGORIES_ERROR,
	GET_CATEGORIES_RESET
} from '../constants'
import config from '../../../config';
import fetch from 'isomorphic-fetch'

const receiveSuccess = response => ({ type: GET_CATEGORIES_SUCCESS, response });
const receiveFail = error => ({ type: GET_CATEGORIES_ERROR, error });

export function reset() {
  return dispatch => dispatch({
    type: GET_CATEGORIES_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_GET_CATEGORIES_ERROR,
  })
}

export const getCategories = (categoryURL) => (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_REQUEST,
  });

  return fetch(`${config.apiDomain}/api/get-categories?category_url=${categoryURL}`)
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