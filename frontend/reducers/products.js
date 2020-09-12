import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILURE,
} from '../actionTypes';

const initialState = {
  data: [],
  errors: null,
  fetching: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_START:
    return { ...state, fetching: true };
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, errors: payload.payload, fetching: false };
    default:
      return state;
  }
};