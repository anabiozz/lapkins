import { combineReducers } from 'redux';
import products from '../products/reducers/products';
import cart from '../cart/reducers/cart';
import productVariant from '../productVariant/reducers/productVariant';

export default combineReducers({
    products: products,
    productVariant: productVariant,
    cart: cart,
})