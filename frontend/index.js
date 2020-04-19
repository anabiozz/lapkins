import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/main.scss';

render(
	<CookiesProvider>
		<Router>
			<App />
		</Router>
	</CookiesProvider>,
	document.querySelector('.root')
);