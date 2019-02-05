import { combineReducers } from 'redux';
import productReducer from '../postcards/reducers/productReducer';

export default combineReducers({
    products: productReducer
})