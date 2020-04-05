import { combineReducers } from 'redux';
import products from '../elements/catalog/reducers';
import cart from '../elements/cart/reducers';
import product_description from '../elements/description/reducers';
import categories from '../elements/categories/reducers';
import auth from '../elements/auth/reducers';

export default combineReducers({
    products,
    product_description,
    cart,
    categories,
    auth,
});