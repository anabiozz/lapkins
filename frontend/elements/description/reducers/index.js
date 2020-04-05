import {
  DISMISS_GET_VARIATION_ERROR,
  GET_VARIATION_ERROR,
  GET_VARIATION_REQUEST,
  GET_VARIATION_RESET,
  GET_VARIATION_SUCCESS,
} from '../constants';

const initialState = {
  item: {},
  errors: '',
  fetching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VARIATION_REQUEST:
      return { ...state, fetching: true };
    case GET_VARIATION_SUCCESS:
      return Object.assign({}, state, { item: action.response, fetching: false, errors: '' });
    case GET_VARIATION_ERROR:
      return { ...state, errors: action.error, fetching: false };
    case GET_VARIATION_RESET:
      return { ...state, item: {} };
    case DISMISS_GET_VARIATION_ERROR:
      return { ...state, errors: '' };
    default:
      return state;
  }
}