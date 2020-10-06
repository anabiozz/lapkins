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
  RESET_CART,
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ORDER_START, RESET_IS_DONE,
} from '../actionTypes';

import * as R from 'ramda';
import { cart } from '../api/mockCart';

const initialState = {
  data: [],
  isDone: false,
  errors: null,
  fetching: false,
  totalQuantity: 0,
  totalPrice: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CART_START:
      return { ...state, fetching: true };
    case FETCH_CART_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case FETCH_CART_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case RESET_CART:
      return { ...state, data: [], fetching: false };
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
    case ADD_TO_CART_START:
      return { ...state, fetching: true };
    case ADD_TO_CART_SUCCESS:
      // const cartProduct = R.find(R.propEq('id', product.id), cart);
      // if (cartProduct) {
      //   cartProduct.quantity += 1;
      // } else {
      //   let newCartProduct = {
      //     id: product.id,
      //     name: product.name,
      //     price: product.variation.price,
      //     size: '123',
      //     quantity: 1,
      //   };
      //   cart = R.append(newCartProduct, cart);
      // }
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case ADD_TO_CART_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case ORDER_START:
      return { ...state, fetching: true };
    case ORDER_SUCCESS:
      return Object.assign({}, state, payload, {fetching: false, errors: null});
    case ORDER_FAILURE:
      return { ...state, errors: payload, fetching: false };
    case RESET_IS_DONE:
      return { ...state, isDone: false, fetching: false };
    default:
      return state;
  }
};