import {
    CREATE_USER_SESSION_REQUEST,
} from '../constants';

const initialState = {
    userSession: "",
};

export default function(state = initialState, action){
    if (action.type === CREATE_USER_SESSION_REQUEST) {
    } else {
        return state;
    }
}