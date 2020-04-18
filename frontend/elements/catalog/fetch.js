
import config from '../../config';
import fetch from 'isomorphic-fetch';

export const getProducts = (category) => {
  return fetch(`${config.apiDomain}/api/v1/products/get-products?category=${category}`)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`);
    })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};