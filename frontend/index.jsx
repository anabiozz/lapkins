import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './_flax/store';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/main.scss';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
let state = store.getState();

hydrate(
	<CookiesProvider>
		<Provider store={store}>
			<Router location={state.path} >
				<App />
			</Router>
		</Provider>
	</CookiesProvider>,
	document.querySelector('.root')
);

// if (module.hot) {
// 	module.hot.accept('./App', () => {
// 		const NextRootContainer = require('./App').default;
// 		render(<NextRootContainer />, document.querySelector('.root'));
// 	});
// }