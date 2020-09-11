import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from './config/config';
import logger from 'morgan';
import cors from 'cors';

const path = require('path');

const app = new express();

const host = process.env.NODE_ENV === 'development' ? config.server.development : config.server.production;
const port = config.server.port;

let root = process.env.CORE_URL;
if (!root) {
	root = '/';
	process.env['CORE_URL'] = root;
}

let webpackConfig = require('../webpack.dev');
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	serverSideRender: false
}));
// app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(root + 'css', express.static(__dirname + '/static'));
app.use(root + 'static/images', express.static(__dirname + '/static/images'));
app.use(root + 'favicon.ico', express.static(__dirname + '/static/images/favicon.ico'));

app.use(cors({
	credentials: true,
}));

app.get('*', function(request, response){
	response.sendFile(path.join(__dirname + '/index.html'));
});

// app.all('*', async (req, res) => {
// 	//
// 	// const store = configureStore(initialState);
// 	// initialState.path = req.path;
//
// 	const actions = matchRoutes(routes, req.path)
// 	.map(({route}) => route.component.fetching ? route.component.fetching({path: req.path}) : null)
// 	.map(async actions => await Promise.all(
// 		(actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
// 	));
//
// 	await Promise.all(actions);
// 	const context = {};
// 	const content = render(req.path, context);
//
// 	if(context.status === 404) {
// 		res.status(404);
// 	}
//
// 	res.send(content);
// });
//
const server = app.listen(port, host, function (error) {
	server.keepAliveTimeout = 0;
	if (error) {
		throw error;
	} else {
			console.info('==> 🌎 Web APP listening on port %s. Open up http://%s:%s in your browser.', port, host, port);
	}
});