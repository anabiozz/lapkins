import {
  DISMISS_GET_PRODUCT_BY_ID_ERROR,
  GET_PRODUCT_BY_ID_ERROR,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_RESET,
  GET_PRODUCT_BY_ID_SUCCESS,
} from '../constants'

const initialState = {
  productVariant: {},
  errors: '',
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_BY_ID_REQUEST:
      return { ...state, fetching: true }
    case GET_PRODUCT_BY_ID_SUCCESS:
      return Object.assign({}, state, { productVariant: action.response, fetching: false, errors: '' })
    case GET_PRODUCT_BY_ID_ERROR:
      return { ...state, errors: action.error, fetching: false }
    case GET_PRODUCT_BY_ID_RESET:
      return { ...state, productVariant: {} }
    case DISMISS_GET_PRODUCT_BY_ID_ERROR:
      return { ...state, errors: '' }
    default:
      return state
  }
}