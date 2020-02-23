import { combineReducers } from 'redux';
import products from '../elements/products/reducers';
import cart from '../elements/cart/reducers';
import product_description from '../elements/product_description/reducers';
import categories from '../elements/categories/reducers';

export default combineReducers({
    products,
    product_description,
    cart,
    categories,
})