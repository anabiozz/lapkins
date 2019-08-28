import React from 'react';
import { hydrate } from "react-dom";
import Provider from 'react-redux/lib/components/Provider';
import Router from './router';
import configureStore from './_flax/store';

import './style/main.scss';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;

hydrate(
	<Provider store={store}>
		 <Router/>
	</Provider>, document.getElementById('root'),
  
)