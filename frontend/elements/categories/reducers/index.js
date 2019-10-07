import {
	DISMISS_GET_CATEGORIES_ERROR,
	GET_CATEGORIES_ERROR,
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_RESET,
	GET_CATEGORIES_SUCCESS,
} from '../constants'

const initialState = {
  categories: {},
  errors: '',
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, fetching: true }
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { categories: action.response, fetching: false, errors: '' })
    case GET_CATEGORIES_ERROR:
      return { ...state, errors: action.error, fetching: false }
    case GET_CATEGORIES_RESET:
      return { ...state, categories: {} }
    case DISMISS_GET_CATEGORIES_ERROR:
      return { ...state, errors: '' }
    default:
      return state
  }
}