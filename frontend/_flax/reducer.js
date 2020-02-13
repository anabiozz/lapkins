import { combineReducers } from 'redux';
import products from '../elements/products/reducers';
import cart from '../elements/cart/reducers';
import variant from '../elements/variant/reducers';
import categories from '../elements/categories/reducers';
import home from '../elements/home/reducers';

export default combineReducers({
    products,
    variant,
    cart,
    categories,
    home,
})