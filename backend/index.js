import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from './config/config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import logger from 'morgan';
import ServerSideRendering from './middleware/serverSideRendering';

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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(root+'css', express.static(__dirname + '/static/css'));
app.use(root+'images', express.static(__dirname + '/static/images'));
app.use(root+'favicon.ico', express.static(__dirname + '/static/images/favicon.ico'));
app.use(ServerSideRendering)

app.listen(port, host, function(error) {
    if (error) {
        console.error('APP ERROR:');
        console.error(error);
    } else {
        console.info('==> 🌎 Web APP listening on port %s. Open up http://%s:%s/ in your browser.', port, host, port);
    }
});