import { combineReducers } from 'redux';
import products from '../products/reducers/products';
import cart from '../cart/reducers/cart';
import productInfo from '../productInfo/reducers/productInfo';

export default combineReducers({
    products,
    productInfo,
    cart,
})