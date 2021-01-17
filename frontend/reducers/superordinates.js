import {
    FETCH_SUBCATEGORIES_FAILURE,
    FETCH_SUBCATEGORIES_SUCCESS,
    FETCH_SUBCATEGORIES_START,
} from '../actionTypes';

const initialState = {
    data: [],
    errors: null,
    fetching: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_SUBCATEGORIES_START:
            return { ...state, fetching: true };
        case FETCH_SUBCATEGORIES_SUCCESS:
            return  Object.assign({}, state, payload, {fetching: false, errors: null});
        case FETCH_SUBCATEGORIES_FAILURE:
            return { ...state, errors: payload, fetching: false };
        default:
            return state;
    }
};