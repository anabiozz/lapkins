import {
  DECREASE_CART_PRODUCT_QTY_FAILURE,
  DECREASE_CART_PRODUCT_QTY_START, DECREASE_CART_PRODUCT_QTY_SUCCESS,
  FETCH_CART_FAILURE,
  FETCH_CART_START,
  FETCH_CART_SUCCESS, INCREASE_CART_PRODUCT_QTY_FAILURE,
  INCREASE_CART_PRODUCT_QTY_START, INCREASE_CART_PRODUCT_QTY_SUCCESS,
  REMOVE_CART_PRODUCT_FAILURE,
  REMOVE_CART_PRODUCT_START,
  REMOVE_CART_PRODUCT_SUCCESS,
  SET_CART_ACTIVE_TAB,
  SET_CART_FIELDS,
  SET_CART_FORM_ERRORS,
} from '../actionTypes';

const initialState = {
  data: {},
  errors: null,
  fetching: false,
  totalQuantity: 0,
  totalPrice: 0,
  activeTab: 'Самовывоз',
  fields: {},
  formErrors: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CART_START:
      return { ...state, fetching: true };
    case FETCH_CART_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_CART_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case REMOVE_CART_PRODUCT_START:
      return { ...state, fetching: true };
    case REMOVE_CART_PRODUCT_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case REMOVE_CART_PRODUCT_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case INCREASE_CART_PRODUCT_QTY_START:
      return { ...state, fetching: true };
    case INCREASE_CART_PRODUCT_QTY_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case INCREASE_CART_PRODUCT_QTY_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case DECREASE_CART_PRODUCT_QTY_START:
      return { ...state, fetching: true };
    case DECREASE_CART_PRODUCT_QTY_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case DECREASE_CART_PRODUCT_QTY_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case SET_CART_ACTIVE_TAB:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case SET_CART_FIELDS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case SET_CART_FORM_ERRORS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    default:
      return state;
  }
};