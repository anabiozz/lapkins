import { combineReducers } from 'redux';
import products from '../products/reducers/products';
import productInfo from '../productInfo/reducers/productInfo';

export default combineReducers({
    products,
    productInfo,
})