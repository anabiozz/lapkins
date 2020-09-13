import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTRATION_START, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILURE, USER_LOGOUT,
} from '../actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN_START:
      return { ...state, fetching: true };
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case USER_LOGIN_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case USER_LOGOUT:
      return { ...state, data: {} };
    case USER_REGISTRATION_START:
      return { ...state, fetching: true };
    case USER_REGISTRATION_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case USER_REGISTRATION_FAILURE:
      return { ...state, errors: payload, fetching: false };
    default:
      return state;
  }
};