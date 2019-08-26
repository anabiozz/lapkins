import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from './config/config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { Provider } from 'react-redux';
import configureStore from '../frontend/_flax/store';
import React from 'react';
import App from '../frontend/App';
import { renderToString } from 'react-dom/server';
import { ServerRouter, Route } from 'react-router-dom'
import Home from '../frontend/home/containers/Home'
import Products from '../frontend/products/containers/Products'
import Cart from '../frontend/cart/containers/Cart'
import ProductDescription from '../frontend/productInfo/containers/ProductDescription'

var app = new express();
const host = process.env.NODE_ENV == 'development' ? config.server.develope : config.server.production;
const port = config.server.port;

let root = process.env.CORE_URL;
if(!root) {
    root = '/';
    process.env['CORE_URL'] = root;
}

var webpackConfig = null;
if (process.env.NODE_ENV == 'development') {
    webpackConfig = require('../webpack.dev');
} else {
    webpackConfig = require('../webpack.prod');
}
var compiler = webpack(webpackConfig);

if (process.env.NODE_ENV == 'production') {
	app.use('*.js', setBundleHeaders); // USE GZIP COMPRESSION FOR PRODUCTION BUNDLE
	app.use(root+'dist', express.static(__dirname + '/../dist'));
} else {
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
}

// TO DELETE IN PRODUCTION!!!
app.use(function(req, res, next) {
    console.log('TRY ADD HEADERS FOR REQUEST ' + req.url);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(root+'css', express.static(__dirname + '/static/css'));
app.use(root+'images', express.static(__dirname + '/static/images'));
app.use(root+'favicon.ico', express.static(__dirname + '/static/images/favicon.ico'));
app.use(bodyParser.json())

let initialState = {
	products: [],
	productInfo: [],
	cart: [],
}

app.get('/', (req, res) => {
  const { preloadedState, content}  = render(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
	res.setHeader('Cache-Control', 'assets, max-age=604800')
	console.log(response);
	
  res.send(response);
});

app.listen(port, host, function(error) {
    if (error) {
        console.error('APP ERROR:');
        console.error(error);
    } else {
        console.info('==> 🌎 Web APP listening on port %s. Open up http://%s:%s/ in your browser.', port, host, port);
    }
});

function render(initialState) {
	// Configure the store with the initial state provided
	const store = configureStore(initialState)
	const coreURL = process.env.CORE_URL ? process.env.CORE_URL : '/'
	// render the App store static markup ins content variable
	let content = renderToString(
		<Provider store={store} >
       <App />
    </Provider>
	);

	console.log(content);
	

	// Get a copy of store data to create the same store on client side 
	const preloadedState = store.getState()

	return {content, preloadedState};
}

function template(title, initialState = {}, content = ""){
	const jsBundle = 'bundle-dev.js';
  let scripts = ''; // Dynamically ship scripts based on render type
  if(content){
    scripts = ` <script>
								window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="${process.env.CORE_URL}dist/${jsBundle}"></script>`
  } else {
    scripts = ` <script src="${process.env.CORE_URL}dist/${jsBundle}"></script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>

								${scripts}
              </body>
              `;

  return page;
}