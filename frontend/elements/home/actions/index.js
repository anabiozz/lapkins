import {
    CREATE_USER_SESSION_SUCCESS,
    CREATE_USER_SESSION_REQUEST,
    CREATE_USER_SESSION_ERROR,
} from "../constants";
import config from '../../../config';

const createUserSessionSuccess = response => ({ type: CREATE_USER_SESSION_SUCCESS, response })
const createUserSessionError = error => ({ type: CREATE_USER_SESSION_ERROR, error })

export const createUserSessionRequest = () => dispatch => {
    dispatch({ type: CREATE_USER_SESSION_REQUEST })

    fetch(`${config.apiDomain}/api/create-user-session`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            if (response.status === 200) {
                return response
            }
            throw new Error(`Cannot load data from server. Response status ${response.status}`)
        })
        .then(response => response.json())
        .then(response => dispatch(createUserSessionSuccess(response)))
        .catch(error => dispatch(createUserSessionError(error)));
}