import { GET_PRODUCT_BY_ID } from '../constants';

const initialState = {
    item: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}