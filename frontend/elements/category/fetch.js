import config from '../../config';
import fetch from 'isomorphic-fetch';

export const getCategory = (category) => {
  return fetch(`${config.apiDomain}/api/v1/products/get-category?category=${category}`)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
      throw new Error(`Cannot load data from server. Response status ${response.status}`);
    });
};