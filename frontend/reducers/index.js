import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import catalog from './catalog';
import categories from './categories';

export default history => combineReducers({
  catalog,
  categories,
  router: connectRouter(history),
});