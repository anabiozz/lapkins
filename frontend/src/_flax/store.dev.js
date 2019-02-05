import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReduser from './reducer';

const configureStore = preloadState => {
    const store = createStore(
        rootReduser,
        preloadState,
        compose(
            applyMiddleware(thunk, createLogger())
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer', () => {
        	const nextRootReducer = require('./reducer').default
          store.replaceReducer(rootReducer)
        })
      }
    
    return store
}

export default configureStore;

