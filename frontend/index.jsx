import React from 'react';
import { hydrate } from "react-dom";
import Provider from 'react-redux/lib/components/Provider';
import Router from './router';
import configureStore from './_flax/store';
import './style/main.scss';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
let state = store.getState();
console.log(state);

hydrate(
	<Provider store={store}>
		<Router path={state}/>
	</Provider>, document.getElementById('root'),
)

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER