import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_FAILURE,
} from '../actionTypes';

const initialState = {
  data: {},
  errors: null,
  fetching: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCT_START:
      return { ...state, fetching: true };
    case FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_PRODUCT_FAILURE:
      return { ...state, errors: payload, fetching: false };
    default:
      return state;
  }
};