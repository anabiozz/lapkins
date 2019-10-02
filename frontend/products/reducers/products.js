import {
  GET_PRODUCTS_REQUEST,
  DISMISS_PRODUCTS_ERROR,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../constants'

const initialState = {
  products: [],
  errors: '',
  fetching: false,
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, fetching: true }
    case GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.response ? action.response : [], fetching: false, errors: '' })
    case GET_PRODUCTS_ERROR:
      return { ...state, errors: action.error, fetching: false }
    case GET_PRODUCTS_RESET:
      return { ...state, products: [] }
    case DISMISS_PRODUCTS_ERROR:
      return { ...state, errors: '' }
    default:
      return state
  }
}