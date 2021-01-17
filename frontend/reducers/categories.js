import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actionTypes';

const initialState = {
  data: [],
  errors: null,
  fetching: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_START:
      return { ...state, fetching: true };
    case FETCH_CATEGORIES_SUCCESS:
      return  Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, errors: payload, fetching: false };
    default:
      return state;
  }
};