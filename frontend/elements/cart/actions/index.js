import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_RESET,
  DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  REMOVE_PRODUCT_FROM_CART,
  LOAD_CART,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM
} from '../constant';

export const addProductToCart = product => async dispatch => dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
export const increaseCartItem = product => async dispatch => dispatch({ type: INCREASE_CART_ITEM, payload: product })
export const decreaseCartItem = product => async dispatch => dispatch({ type: DECREASE_CART_ITEM, payload: product })
export const removeProductFromCart = product => ({ type: REMOVE_PRODUCT_FROM_CART, payload: product });
export const reset = () => async dispatch => dispatch({ type: ADD_PRODUCT_TO_CART_RESET })
export const dismissError = () => async dispatch => dispatch({ type: DISMISS_ADD_PRODUCT_TO_CART_ERROR })
export const loadCart = () => async dispatch => dispatch({ type: LOAD_CART })