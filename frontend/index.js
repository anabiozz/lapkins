import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import configureStore from './_flax/store';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style/main.scss'
import { hydrate } from "react-dom";


const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
const history = browserHistory;

console.log('CORE_URL: ' + process.env.CORE_URL);
let state = store.getState();

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'),
    </BrowserRouter>
  
)

module.hot.accept();