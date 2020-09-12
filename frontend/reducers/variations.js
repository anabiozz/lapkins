import {
  FETCH_VARIATIONS_SUCCESS,
  FETCH_VARIATIONS_START,
  FETCH_VARIATIONS_FAILURE,
} from '../actionTypes';

const initialState = {
  data: [],
  errors: null,
  fetching: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_VARIATIONS_START:
      return { ...state, fetching: true };
    case FETCH_VARIATIONS_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_VARIATIONS_FAILURE:
      return { ...state, errors: payload.payload, fetching: false };
    default:
      return state;
  }
};