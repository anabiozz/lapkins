import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_VARIATIONS_START,
  FETCH_VARIATIONS_SUCCESS,
  FETCH_VARIATIONS_FAILURE,
  FETCH_CART_START,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTRATION_START,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE,
  REMOVE_CART_PRODUCT_START,
  REMOVE_CART_PRODUCT_SUCCESS,
  REMOVE_CART_PRODUCT_FAILURE,
  DECREASE_CART_PRODUCT_QTY_START,
  DECREASE_CART_PRODUCT_QTY_SUCCESS,
  DECREASE_CART_PRODUCT_QTY_FAILURE,
  INCREASE_CART_PRODUCT_QTY_START,
  INCREASE_CART_PRODUCT_QTY_SUCCESS,
  INCREASE_CART_PRODUCT_QTY_FAILURE,
  USER_LOGOUT,
  RESET_CART, ADD_TO_CART_START, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
} from '../actionTypes';

import {fetchProducts as fetchProductsAPI} from '../api';
import {fetchProduct as fetchProductAPI} from '../api';
import {fetchCategories as fetchCategoriesAPI} from '../api';
import {fetchVariations as fetchVariationsAPI} from '../api';
import {fetchCart as fetchCartAPI} from '../api';
import {login as loginAPI} from '../api';
import {registration as registrationAPI} from '../api';
import {addToCart as addToCartAPI} from '../api';

import {increaseCartProductQty as increaseCartProductQtyAPI} from '../api';
import {decreaseCartProductQty as decreaseCartProductQtyAPI} from '../api';
import {removeCartProduct as removeCartProductAPI} from '../api';

export const fetchProducts = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_START
  });

  try {
    const products = await fetchProductsAPI();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: {data: products},
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchVariations = () => async dispatch => {
  dispatch({
    type: FETCH_VARIATIONS_START
  });

  try {
    const variations = await fetchVariationsAPI();
    dispatch({
      type: FETCH_VARIATIONS_SUCCESS,
      payload: {data: variations},
    });
  } catch (err) {
    dispatch({
      type: FETCH_VARIATIONS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchProduct = (sku) => async dispatch => {
  dispatch({
    type: FETCH_PRODUCT_START
  });

  try {
    const product = await fetchProductAPI(sku);
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: {data: product},
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_START
  });

  try {
    const categories = await fetchCategoriesAPI();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: {data: categories},
    });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchCart = () => async dispatch => {
  dispatch({
    type: FETCH_CART_START
  });

  try {
    const cart = await fetchCartAPI();
    dispatch({
      type: FETCH_CART_SUCCESS,
      payload: {data: cart},
    });
  } catch (err) {
    dispatch({
      type: FETCH_CART_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const resetCart = () => async dispatch => {
  dispatch({
    type: RESET_CART,
  });
};

export const addToCart = (product) => async dispatch => {
  dispatch({
    type: ADD_TO_CART_START,
  });

  try {
    const cart = await addToCartAPI(product);
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: {data: cart},
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const login = (subject, password) => async dispatch => {
  dispatch({
    type: USER_LOGIN_START,
  });

  try {
    let user = await loginAPI(subject, password);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {data: user}
    });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export const registration = (subject, password) => async dispatch => {
  dispatch({
    type: USER_REGISTRATION_START,
  });

  try {
    let user = await registrationAPI(subject, password);
    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: {data: user}
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTRATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};


export const removeCartProduct = (product) => async dispatch => {
  dispatch({
    type: REMOVE_CART_PRODUCT_START,
  });

  try {
    let cart = await removeCartProductAPI(product);
    dispatch({
      type: REMOVE_CART_PRODUCT_SUCCESS,
      payload: {data: cart}
    });
  } catch (err) {
    dispatch({
      type: REMOVE_CART_PRODUCT_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const decreaseCartProductQty = (product) => async dispatch => {
  dispatch({
    type: DECREASE_CART_PRODUCT_QTY_START,
  });

  try {
    let cart = await decreaseCartProductQtyAPI(product);
    dispatch({
      type: DECREASE_CART_PRODUCT_QTY_SUCCESS,
      payload: {data: cart}
    });
  } catch (err) {
    dispatch({
      type: DECREASE_CART_PRODUCT_QTY_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const increaseCartProductQty = (product) => async dispatch => {
  dispatch({
    type: INCREASE_CART_PRODUCT_QTY_START,
  });

  try {
    let cart = await increaseCartProductQtyAPI(product);
    dispatch({
      type: INCREASE_CART_PRODUCT_QTY_SUCCESS,
      payload: {data: cart}
    });
  } catch (err) {
    dispatch({
      type: INCREASE_CART_PRODUCT_QTY_FAILURE,
      payload: err,
      error: true,
    });
  }
};

// export const getProducts = (category) => {
//   return fetch(`${config.apiDomain}/api/v1/products/get-products?category=${category}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response;
//       }
//       throw new Error(`Cannot load data from server. Response status ${response.status}`);
//     })
//     .then(response => response.json())
//     .then(response => response)
//     .catch(error => error);
// };