var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
	entry: './frontend',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle-prod.js',
		publicPath: '/dist'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	optimization: {
		minimize: true //Update this to true or false
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				HOME: JSON.stringify(process.env.HOME),
				CORE_URL: JSON.stringify(coreUrl),
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new CompressionPlugin({
			// asset: 'bundle-prod.js.gz',
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, "frontend"),
				],
			},
			{
				test: /\.(s*)css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],

			},
			{
				test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'backend/static/fonts'
					}
				}]
			},
		]
	}
}