import { combineReducers } from 'redux';
import productReducer from '../products/reducers/productReducer';
import productInfoReducer from '../productInfo/reducers/productInfoReducer';

export default combineReducers({
    products: productReducer,
    productInfo: productInfoReducer
})