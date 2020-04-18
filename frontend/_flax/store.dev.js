import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = preloadState => {
  const store = createStore(
    rootReducer,
    preloadState,
    composeWithDevTools (
      applyMiddleware(thunk, createLogger()),
    ),
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

export default configureStore;

