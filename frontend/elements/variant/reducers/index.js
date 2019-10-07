import {
  DISMISS_GET_VARIANT_ERROR,
  GET_VARIANT_ERROR,
  GET_VARIANT_REQUEST,
  GET_VARIANT_RESET,
  GET_VARIANT_SUCCESS,
} from '../constants'

const initialState = {
  variant: {},
  errors: '',
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VARIANT_REQUEST:
      return { ...state, fetching: true }
    case GET_VARIANT_SUCCESS:
      return Object.assign({}, state, { variant: action.response, fetching: false, errors: '' })
    case GET_VARIANT_ERROR:
      return { ...state, errors: action.error, fetching: false }
    case GET_VARIANT_RESET:
      return { ...state, variant: {} }
    case DISMISS_GET_VARIANT_ERROR:
      return { ...state, errors: '' }
    default:
      return state
  }
}