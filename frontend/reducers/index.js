import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import products from './products';
import product from './product';
import categories from './categories';
import cart from './cart';
import user from './user';
import superordinates from './superordinates';

export default history => combineReducers({
  products,
  product,
  categories,
  user,
  cart,
  superordinates,
  router: connectRouter(history),
});