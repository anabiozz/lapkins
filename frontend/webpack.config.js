const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	output: {
    path: path.resolve(__dirname, '../backend/static'),
    filename: 'main.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: [path.join(__dirname, './src')],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test:/\.(s*)css$/,
				use:['style-loader','css-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader'
				}]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'HOME': JSON.stringify(process.env.HOME),
			}
		})
	]
}