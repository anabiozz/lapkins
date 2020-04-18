import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import configureStore from './_flax/store';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/main.scss';

// const store = configureStore(window.__INITIAL_STATE__);
// delete window.__INITIAL_STATE__;
// let state = store.getState();

hydrate(
	<CookiesProvider>
		<Router>
			<App />
		</Router>
	</CookiesProvider>,
	document.querySelector('.root')
);