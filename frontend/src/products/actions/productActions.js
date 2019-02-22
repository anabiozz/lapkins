import {
    FETCH_PRODUCTS
} from '../constants';

export const fetchProducts = () => dispatch => {
    fetch('http://localhost:9000/api/get-products?products_type=1')
        .then(res => res.json())
        .then(products => 
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products ? products : []
            })
        );
};