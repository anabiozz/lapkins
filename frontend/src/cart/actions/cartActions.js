import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_CART_RESET,
  DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  REMOVE_PRODUCT_FROM_CART,
  LOAD_CART,
} from '../constant';

import config from '../../config';

const addToCartSuccess = response => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  response,
});

const addToCartFail = error => ({
  type: ADD_PRODUCT_TO_CART_ERROR,
  error,
});

let domain = config.baseDomain + process.env.CORE_URL;
if (typeof window !== 'undefined') {
  domain = window.location.origin + process.env.CORE_URL;
}

export const addProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
})

export const removeProductFromCart = product => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: product
});

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export function reset() {
  return dispatch => dispatch({
    type: ADD_PRODUCT_TO_CART_RESET,
  })
}

export function dismissError() {
  return dispatch => dispatch({
    type: DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  })
}