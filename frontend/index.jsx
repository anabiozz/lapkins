import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { hydrate } from "react-dom";
import Provider from 'react-redux/lib/components/Provider';
import App from './router';
import configureStore from './_flax/store';

import './style/main.scss';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
let state = store.getState();

function render(Root) {
	hydrate(
	<AppContainer>
		<Provider store={store}>
			<App path={state}/>
		</Provider>
	</AppContainer>,
	document.getElementById('root'));
}

render(App);

if(module.hot) {
	module.hot.accept('./router', () => {
		try {
			render(App)
		} catch (e) {
			location.reload();
		}
	});
}