import {
  GET_PRODUCT_BY_ID
} from '../constants';

import config from '../../config';

export const getProductByID = (product_id) => dispatch => {
  fetch(`${config.API_URL}/api/get-product-by-id?product_id=${product_id}`)
      .then(res => res.json())
      .then(product => 
          dispatch({
              type: GET_PRODUCT_BY_ID,
              payload: product ? product : {}
          })
      );
};