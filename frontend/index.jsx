import React from 'react';
import { hydrate } from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './_flax/store';

import './style/main.scss';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
let state = store.getState();

hydrate(
	<Provider store={store}>
		<App path={state}/>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextRootContainer = require('./App').default;
		render(<NextRootContainer />, document.getElementById('root'));
	})
}