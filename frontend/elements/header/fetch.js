// loadCart ***********************************

import fetch from 'isomorphic-fetch';
import config from '../../config';

export function loadCartInfo() {
  return fetch(`${config.apiDomain}/api/v1/carts/load-header-cart-info`, {
    method: 'GET',
    credentials: 'include',
  });
}