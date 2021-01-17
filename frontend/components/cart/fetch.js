import fetch from 'isomorphic-fetch';
import config from '../../config';

export const addProduct = (sku) => {
  return fetch(`${config.apiDomain}/api/v1/carts/add`, {
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
  return fetch(`${config.apiDomain}/api/v1/carts/increase`,{
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
  return fetch(`${config.apiDomain}/api/v1/carts/decrease`, {
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
  return fetch(`${config.apiDomain}/api/v1/carts/remove`, {
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
  return fetch(`${config.apiDomain}/api/v1/carts/get`,{
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  });
};

export function getSummary() {
  return fetch(`${config.apiDomain}/api/v1/carts/get-summary`, {
    method: 'GET',
    credentials: 'include',
  });
}