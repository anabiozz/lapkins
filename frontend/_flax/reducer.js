import { combineReducers } from 'redux';
import products from '../products/reducers/products';
import cart from '../cart/reducers/cart';
import productInfo from '../product_desc/reducers/productInfo';

export default combineReducers({
    products: products,
    productInfo: productInfo,
    cart: cart,
})