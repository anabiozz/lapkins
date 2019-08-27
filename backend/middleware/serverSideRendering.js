import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import match from 'react-router/lib/match';
import Router from 'react-router/lib/Router';
import configureStore from '../../frontend/_flax/store';

import config from '../config/config';
import App from '../../frontend/App';
import { StaticRouter } from 'react-router-dom';

module.exports = function (request, response, next) {
	console.log('Middleware Url is: ' + request.url);
	console.log('CORE_URL: ' + process.env.CORE_URL);
	response.setHeader('Last-Modified', (new Date()).toUTCString());

	getInitialSettings(null, response, request);
}

function generateInitialSettings(props, response, request) {
	try {
		let initialState = JSON.parse(JSON.stringify(config.initialState));

		const store = configureStore(initialState);

		try {
			const context = {};
			const appHtml = renderToString( 
				<StaticRouter location={request.url} context={context}>
					<App />
				</StaticRouter>
			);

			response.send(renderPage(appHtml, store))
		} catch (e) {
			console.error(e)
			response.send('[ERROR] for details view server logs!')
		}

		return store;
	} catch (e) {
		console.log(e);
	}
}

const getInitialSettings = async (props, response, request) => {
	try {
		return await generateInitialSettings(props, response, request)
	} catch (error) {
		response.send('[ERROR] for details view server logs!')
	}
}

function renderPage(appHtml, store) {
	const finalState = store.getState();

	const jsBundle = 'bundle-dev.js';
	return `<!DOCTYPE html>
    <html>
    <head>
			<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Jura" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Mrs+Sheppards" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:100" rel="stylesheet">
      <title>Lapkin's</title>
      <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}
      </script>
    </head>
    <body>
    <div id="root">${appHtml}</div>
    <script src="${process.env.CORE_URL}dist/${jsBundle}"></script>
    </body>
    </html>`
}