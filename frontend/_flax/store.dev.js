import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
// import config from '../config';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = preloadState => {
  const store = createStore(
    rootReducer,
    { ...getAuthState(), ...preloadState },
    composeWithDevTools (
      compose(applyMiddleware(thunk, createLogger())),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

function getAuthState() {
  try {
    const token = cookies.get('token') || undefined;
    return { auth: { token: token } };
  } catch (err) { return undefined; }
}

// function requestMiddleware() {
//   return ({ dispatch, getState }) => next => (action) => {
//     const {
//       request,
//     } = action;
//
//     if (!request) {
//       return next(action);
//     }
//
//     const { token } = getState().auth;
//
//     console.log('token', token);
//
//     // 5 minutes from now
//     const refreshThreshold = (new Date.getTime() + 300000);
//
//     if (token.refresh_token && refreshThreshold > token.expires_at) {
//
//       dispatch({type: REFRESH_TOKEN});
//
//       return fetch(`${config.api.domain}/api/v1/auth/refresh`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           'token': token,
//         })
//       }).then((response) => {
//         if (response.status === 200) {
//           return response;
//         }
//         throw new Error(`Cannot load data from server. Response status ${response.status}`);
//       })
//         .then(response => response.json())
//         .then(response => dispatch(refreshTokenSuccess(response)))
//         .catch(error => dispatch(refreshTokenFail(error)));
//     }
//     return request(token);
//   };
// }

export default configureStore;

