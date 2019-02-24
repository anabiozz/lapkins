import { 
    DISMISS_GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_RESET,
    GET_PRODUCT_BY_ID_SUCCESS
} from '../constants';

const initialState = {
    data: {},
    errors: null,
    fetching: false,
};


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_BY_ID_REQUEST:
            return { ...state, fetching: true }
        case GET_PRODUCT_BY_ID_SUCCESS: 
            return Object.assign({}, state, {data: action.response, fetching: false, errors: null})
        case GET_PRODUCT_BY_ID_ERROR:
            return { ...state, errors: action.error, fetching: false }
        case GET_PRODUCT_BY_ID_RESET:
            return { ...state, data: {} }
        case DISMISS_GET_PRODUCT_BY_ID_ERROR:
            return { ...state, errors: null }
        default:
            return state;
    }
}