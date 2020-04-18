import fetch from 'isomorphic-fetch';
import config from '../../config';

export const addProduct = (sku) => {
  return fetch(`${config.apiDomain}/api/v1/carts/add-product`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'sku': sku,
    })
  });
};

export const increaseProductQuantity = (sku) => {
  fetch(`${config.apiDomain}/api/v1/carts/increase-product-quantity`,{
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'sku': sku,
    })
  });
};

export const decreaseProductQuantity = (sku) => {
  fetch(`${config.apiDomain}/api/v1/carts/decrease-product-quantity`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'sku': sku,
    })
  });
};

export const removeProduct = (sku) => {
  fetch(`${config.apiDomain}/api/v1/carts/remove-product`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'sku': sku,
    })
  });
};

export const loadCart = () => {
  return fetch(`${config.apiDomain}/api/v1/carts/load-cart`,{
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  });
};

// CreateOrder ***********************************

// const createOrderSuccess = response => ({ type: CREATE_ORDER_SUCCESS, response });
// const createOrderFail = error => ({ type: CREATE_ORDER_ERROR, error });
// export const createOrderReset = () => async dispatch => dispatch({ type: CREATE_ORDER_RESET });
//
// export const createOrder = (cartSession) => async dispatch => {
//   dispatch({ type: CREATE_ORDER_REQUEST });
//
//   fetch(`${config.apiDomain}/api/v1/carts/create-order`, {
//     method: 'POST',
//       headers: {
//       // Check what headers the API needs. A couple of usual right below
//       'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'variation_id': variationID,
//       'cart_session': cartSession,
//       'size_option_id': sizeOptionID,
//     })
//   })
//   .then((response) => {
//     if (response.status === 200) {
//       return response;
//     }
//     throw new Error(`Cannot load data from server. Response status ${response.status}`);
//   })
//   .then(response => response.json())
//   .then(response => dispatch(createOrderSuccess(response)))
//   .catch(error => dispatch(createOrderFail(error)));
// };