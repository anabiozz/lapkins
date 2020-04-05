import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  AUTH_ERROR_RESET,
} from '../constants';

const defaultState = {
  token: '',
  subject: '',
  error: '',
  fetching: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case REGISTER:
      return  { ...state, fetching: true };
    case REGISTER_ERROR:
      return { ...state, error: action.error.message || '', fetching: false };
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        token: action.response.token,
        fetching: false,
        subject: action.response.subject,
      });
    case AUTH_ERROR_RESET:
      return { ...state, error: '',};
    default:
      return state;
  }
}