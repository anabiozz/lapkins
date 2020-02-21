import {
  ADD_ITEM_TO_CART_RESET,
  DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  LOAD_CART,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_SUCCESS,
  INCREASE_CART_ITEM_REQUEST,
  INCREASE_CART_ITEM_SUCCESS,
  INCREASE_CART_ITEM_ERROR,
  DECREASE_CART_ITEM_ERROR,
  DECREASE_CART_ITEM_REQUEST,
  DECREASE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_ERROR,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  LOAD_CART_ERROR,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
} from '../constant';
import fetch from 'isomorphic-fetch';
import config from '../../../config';

const addItemToCartSuccess = response => ({ type: ADD_ITEM_TO_CART_SUCCESS, response });
const addItemToCartFail = error => ({ type: ADD_ITEM_TO_CART_ERROR, error });

export const addItemToCart = (variationID, cartSession, item, sizeOptionID) => dispatch => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  fetch(`${config.apiDomain}/api/cart/add-product`, {
    method: 'POST',
    headers: {
        // Check what headers the API needs. A couple of usual right below
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "variation_id": variationID,
      "cart_session": cartSession,
      "size_option_id": sizeOptionID,
    })
  })
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(dispatch(addItemToCartSuccess(item)))
  .catch(error => dispatch(addItemToCartFail(error)));
};

// increaseCartItemQuantity ***********************************

const increaseCartItemQuantitySuccess = response => ({ type: INCREASE_CART_ITEM_SUCCESS, response });
const increaseCartItemQuantityFail = error => ({ type: INCREASE_CART_ITEM_ERROR, error });

export const increaseCartItemQuantity = (variationID, cartSession, newQuantity) => async dispatch => {
  dispatch({ type: INCREASE_CART_ITEM_REQUEST });

  fetch(`${config.apiDomain}/api/cart/change-quantity?cart_session=${cartSession}&variation_id=${variationID}&new_quantity=${newQuantity}`)
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(response => dispatch(increaseCartItemQuantitySuccess(response)))
  .catch(error => dispatch(increaseCartItemQuantityFail(error)));
};

// decreaseCartItem ***********************************

const decreaseCartItemQuantitySuccess = response => ({ type: DECREASE_CART_ITEM_SUCCESS, response });
const decreaseCartItemQuantityFail = error => ({ type: DECREASE_CART_ITEM_ERROR, error });

export const decreaseCartItem = (product, cartSession) => async dispatch => {
  dispatch({ type: DECREASE_CART_ITEM_REQUEST });

  fetch(`${config.apiDomain}/api/cart/change-product?cart_session=${cartSession}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(decreaseCartItemQuantitySuccess(response)))
    .catch(error => dispatch(decreaseCartItemQuantityFail(error)));
};

// removeProductFromCart ***********************************

const removeCartItemSuccess = response => ({ type: REMOVE_CART_ITEM_SUCCESS, response });
const removeCartItemFail = error => ({ type: REMOVE_CART_ITEM_ERROR, error });

export const removeProductFromCart = (product, cartSession) => async dispatch => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  fetch(`${config.apiDomain}/api/cart/remove-product?cart_session=${cartSession}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(removeCartItemSuccess(response)))
    .catch(error => dispatch(removeCartItemFail(error)));
};

// loadCart ***********************************

const loadCartSuccess = response => ({ type: LOAD_CART_SUCCESS, response });
const loadCartFail = error => ({ type: LOAD_CART_ERROR, error });

export const loadCart = (product, cartSession) => async dispatch => {
  dispatch({ type: LOAD_CART_REQUEST });

  fetch(`${config.apiDomain}/api/cart/load-cart?cart_session=${cartSession}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(loadCartSuccess(response)))
    .catch(error => dispatch(loadCartFail(error)));
};


export const cartReset = () => async dispatch => dispatch({ type: ADD_ITEM_TO_CART_RESET });
export const dismissError = () => async dispatch => dispatch({ type: DISMISS_ADD_PRODUCT_TO_CART_ERROR });