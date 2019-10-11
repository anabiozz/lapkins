import {
  ADD_ITEM_TO_CART_RESET,
  DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  REMOVE_PRODUCT_FROM_CART,
  LOAD_CART,
  DECREASE_CART_ITEM,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_SUCCESS,
  INCREASE_CART_ITEM_REQUEST,
  INCREASE_CART_ITEM_SUCCESS,
  INCREASE_CART_ITEM_ERROR,
  CREATE_CART_SESSION_REQUEST,
  CREATE_CART_SESSION_SUCCESS,
  CREATE_CART_SESSION_ERROR,
} from '../constant';
import fetch from 'isomorphic-fetch';
import config from '../../../config';

const addItemToCartSuccess = response => ({ type: ADD_ITEM_TO_CART_SUCCESS, response })
const addItemToCartFail = error => ({ type: ADD_ITEM_TO_CART_ERROR, error })

export const addItemToCart = (variantID, cartSession, customerID) => dispatch => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  fetch(`${config.apiDomain}/api/cart/add-product`, {
    method: 'POST',
    headers: {
        // Check what headers the API needs. A couple of usuals right below
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "variant_id": variantID,
      "customer_id": customerID,
      "cart_session": cartSession,
    })
  })
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(response => dispatch(addItemToCartSuccess(response)))
  .catch(error => dispatch(addItemToCartFail(error)));
}

// increaseCartItemQuantity ***********************************

const increaseCartItemQuantitySuccess = response => ({ type: INCREASE_CART_ITEM_SUCCESS, response })
const increaseCartItemQuantityFail = error => ({ type: INCREASE_CART_ITEM_ERROR, error })

export const increaseCartItemQuantity = (variant_id, cart_session, newQuantety) => async dispatch => {
  dispatch({ type: INCREASE_CART_ITEM_REQUEST });

  fetch(`${config.apiDomain}/api/cart/change-quantity?cart_session=${cart_session}&variant_id=${variant_id}&new_quantety=${newQuantety}`)
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(response => dispatch(increaseCartItemQuantitySuccess(response)))
  .catch(error => dispatch(increaseCartItemQuantityFail(error)));
}

// decreaseCartItem ***********************************

export const decreaseCartItem = product => async dispatch => {
  dispatch({ type: DECREASE_CART_ITEM, payload: product });

  fetch(`${config.apiDomain}/api/cart/change-product?cart_session=${cart_session}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(receiveSuccess(response)))
    .catch(error => dispatch(receiveFail(error)));
}

// removeProductFromCart ***********************************

export const removeProductFromCart = product => async dispatch => {
  dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: product });

  fetch(`${config.apiDomain}/api/cart/remove-product?cart_session=${cart_session}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(response => dispatch(receiveSuccess(response)))
    .catch(error => dispatch(receiveFail(error)));
}

// createCartSession ***********************************

const createCartSessionSuccess = response => ({ type: CREATE_CART_SESSION_SUCCESS, response })
const createCartSessionFail = error => ({ type: CREATE_CART_SESSION_ERROR, error })

export const createCartSession = () => async dispatch => {
  dispatch({ type: CREATE_CART_SESSION_REQUEST });

  fetch(`${config.apiDomain}/api/cart/create-cart-session`)
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(response => dispatch(createCartSessionSuccess(response)))
  .catch(error => dispatch(createCartSessionFail(error)));
}

export const cartReset = () => async dispatch => dispatch({ type: ADD_ITEM_TO_CART_RESET });
export const dismissError = () => async dispatch => dispatch({ type: DISMISS_ADD_PRODUCT_TO_CART_ERROR });
export const loadCart = () => async dispatch => dispatch({ type: LOAD_CART });