const path = require('path');
const webpack = require('webpack');
const core_url = process.env.CORE_URL ? process.env.CORE_URL : '/';

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../backend/static'),
		filename: 'main.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
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
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader'
				}]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts'
					}
				}]
			},
			{
				test: /\.(png)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images'
					}
				}]
			},
			// {
			// 	test: /\.(png|jp(e*)g|svg)$/,  
			// 	use: [{
			// 			loader: 'url-loader',
			// 			options: { 
			// 					limit: 8000, // Convert images < 8kb to base64 strings
			// 					name: 'images/[hash]-[name].[ext]'
			// 			} 
			// 	}]
			// }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				HOME: JSON.stringify(process.env.HOME),
				CORE_URL: JSON.stringify(core_url),
			}
		})
	]
}