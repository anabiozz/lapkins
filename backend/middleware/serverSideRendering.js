import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import match from 'react-router/lib/match';
import Router from 'react-router/lib/Router';
import configureStore from '../../frontend/_flax/store';
import Provider from 'react-redux/lib/components/Provider'
import routes from '../../frontend/routes';
import config from '../config/config';
import Home from '../../frontend/home/containers/Home';

module.exports = function (request, response, next) {
	console.log('Middleware Url is: ' + request.url);
	console.log('CORE_URL: ' + process.env.CORE_URL);
	response.setHeader('Last-Modified', (new Date()).toUTCString());

	match({
		routes: routes(request),
		location: request.url
	}, (err, redirect, props) => {
		if (err) {
			console.log('Warning: serverSideRendering middleware routing failed, try backend routing');
			next()
		} else if (redirect) {
			console.log('Log: serverSideRendering middleware trigger redirect');
			// request.session.redirectURL = request.url;
			response.redirect(redirect.pathname + redirect.search)
		} else if (props) {
			console.log('Log: serverSideRendering middleware found route');

			getInitialSettings(props, response, request);
		} else {
			console.log('Log: serverSideRendering middleware does\'t found route, try backend routing');
			next()
		}
	})
}

function generateInitialSettings(props, response, user) {
	try {
		let initialState = JSON.parse(JSON.stringify(config.initialState));

		// if(user) {
		//     initialState.user.name = user.uuid;
		// }
		// let settingsData = yield settings.get();
		// if(settingsData.length == 0 )
		//     settingsData = yield settings.initSettings();
		// else if( settingsData[0].version != initialState.settings.version) {
		//     settingsData = yield settings.initSettings();
		// }

		const store = configureStore(initialState);

		try {

			const appHtml = renderToString( 
				<Provider store = {store} >
					<Home / >
				</Provider>
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

const getInitialSettings = async (props, response, user) => {
	try {
		return await generateInitialSettings(props, response, user)
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