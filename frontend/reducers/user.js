import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  SET_USER_FIELDS,
  SET_USER_FORM_ERRORS,
  RESET_USER_FORM_ERRORS, USER_REGISTRATION_START, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILURE,
} from '../actionTypes';

const initialState = {
  fields: {},
  formErrors: {},
  data: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_FIELDS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case RESET_USER_FORM_ERRORS:
      return { ...state, formErrors: {}, fetching: false };
    case SET_USER_FORM_ERRORS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case USER_LOGIN_START:
      return { ...state, fetching: true };
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case USER_LOGIN_FAILURE:
      return { ...state, errors: payload, fetching: false };
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