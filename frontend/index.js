import React from 'react';
import { render } from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './style/main.scss';
import routes from './routes';
import createRootReducer from './reducers';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
	createRootReducer(history),
	composeWithDevTools(applyMiddleware(...middlewares))
);

render(
	<CookiesProvider>
		<Provider store={store}>
			<ConnectedRouter history={history} >{routes}</ConnectedRouter>
		</Provider>
	</CookiesProvider>,
	document.querySelector('.root')
);