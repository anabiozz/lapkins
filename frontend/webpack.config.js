const path = require('path');

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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader'
				}]
			}
		]
	}
}