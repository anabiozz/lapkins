import { combineReducers } from 'redux';
import products from '../elements/products/reducers';
import cart from '../elements/cart/reducers';
import variant from '../elements/variant/reducers';
import categories from '../elements/categories/reducers'

export default combineReducers({
    products: products,
    variant: variant,
    cart: cart,
    categories: categories,
})