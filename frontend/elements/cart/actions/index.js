import {
  ADD_PRODUCT_RESET,
  DISMISS_ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  INCREASE_PRODUCT_QUANTITY_REQUEST,
  INCREASE_PRODUCT_QUANTITY_SUCCESS,
  INCREASE_PRODUCT_QUANTITY_ERROR,
  DECREASE_PRODUCT_QUANTITY_ERROR,
  DECREASE_PRODUCT_QUANTITY_REQUEST,
  DECREASE_PRODUCT_QUANTITY_SUCCESS,
  REMOVE_PRODUCT_ERROR,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  LOAD_CART_ERROR,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_RESET,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_RESET,
  CREATE_ORDER_REQUEST,
} from '../constant';
import fetch from 'isomorphic-fetch';
import config from '../../../config';

const addProductSuccess = response => ({ type: ADD_PRODUCT_SUCCESS, response });
const addProductFail = error => ({ type: ADD_PRODUCT_ERROR, error });

export const addProduct = (variationID, cartSession, product, sizeOptionID) => dispatch => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

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
  .then(dispatch(addProductSuccess(product)))
  .catch(error => dispatch(addProductFail(error)));
};

// increaseProductQuantity ***********************************

const increaseProductQuantitySuccess = response => ({ type: INCREASE_PRODUCT_QUANTITY_SUCCESS, response });
const increaseProductQuantityFail = error => ({ type: INCREASE_PRODUCT_QUANTITY_ERROR, error });

export const increaseProductQuantity = (variationID, cartSession, sizeOptionID) => async dispatch => {
  dispatch({ type: INCREASE_PRODUCT_QUANTITY_REQUEST });

  fetch(`${config.apiDomain}/api/cart/increase-product-quantity?cart_session=${cartSession}&variation_id=${variationID}&size_option_id=${sizeOptionID}`)
  .then((response) => {
    if (response.status === 200) {
      return response
    }
    throw new Error(`Cannot load data from server. Response status ${response.status}`)
  })
  .then(response => response.json())
  .then(dispatch(increaseProductQuantitySuccess({variationID, sizeOptionID})))
  .catch(error => dispatch(increaseProductQuantityFail(error)));
};

// decreaseProductQuantity ***********************************

const decreaseProductQuantitySuccess = response => ({ type: DECREASE_PRODUCT_QUANTITY_SUCCESS, response });
const decreaseProductQuantityFail = error => ({ type: DECREASE_PRODUCT_QUANTITY_ERROR, error });

export const decreaseProductQuantity = (variationID, cartSession, sizeOptionID) => async dispatch => {
  dispatch({ type: DECREASE_PRODUCT_QUANTITY_REQUEST });

  fetch(`${config.apiDomain}/api/cart/decrease-product-quantity?cart_session=${cartSession}&variation_id=${variationID}&size_option_id=${sizeOptionID}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(dispatch(decreaseProductQuantitySuccess({variationID, sizeOptionID})))
    .catch(error => dispatch(decreaseProductQuantityFail(error)));
};

// removeProduct

const removeProductSuccess = response => ({ type: REMOVE_PRODUCT_SUCCESS, response });
const removeProductFail = error => ({ type: REMOVE_PRODUCT_ERROR, error });

export const removeProduct = (product, variationID, cartSession, sizeOptionID) => async dispatch => {
  dispatch({ type: REMOVE_PRODUCT_REQUEST });

  fetch(`${config.apiDomain}/api/cart/remove-product?cart_session=${cartSession}&variation_id=${variationID}&size_option_id=${sizeOptionID}`)
    .then((response) => {
      if (response.status === 200) {
        return response
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`)
    })
    .then(response => response.json())
    .then(dispatch(removeProductSuccess(product)))
    .catch(error => dispatch(removeProductFail(error)));
};

// loadCart ***********************************

const loadCartSuccess = response => ({ type: LOAD_CART_SUCCESS, response });
const loadCartFail = error => ({ type: LOAD_CART_ERROR, error });
export const loadCartReset = () => async dispatch => dispatch({ type: LOAD_CART_RESET });

export const loadCart = (cartSession) => async dispatch => {
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

// CreateOrder ***********************************

const createOrderSuccess = response => ({ type: CREATE_ORDER_SUCCESS, response });
const createOrderFail = error => ({ type: CREATE_ORDER_ERROR, error });
export const createOrderReset = () => async dispatch => dispatch({ type: CREATE_ORDER_RESET });

export const createOrder = (cartSession) => async dispatch => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  fetch(`${config.apiDomain}/api/cart/create-order`, {
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
  .then(response => dispatch(createOrderSuccess(response)))
  .catch(error => dispatch(createOrderFail(error)));
};

export const dismissError = () => async dispatch => dispatch({ type: DISMISS_ADD_PRODUCT_TO_CART_ERROR });