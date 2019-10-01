var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    "@babel/polyfill",
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './frontend/index.jsx'
  ],
  output: {
    filename: 'bundle-dev.js',
    path: path.resolve(__dirname, 'backend/static'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx',  '.png', '.woff', '.woff2']
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: '/node_modules/',
        loader: ['babel-loader'],
        include: path.join(__dirname, 'frontend')
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          toplevel: true,
          mangle: true,
        },
      }),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/, // Create a vendor chunk with all the imported node_modules in it
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //   },
    // },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(coreUrl),
        DEV: JSON.stringify(process.env.NODE_ENV === "development"),
      },
    }),
  ],
  // devServer: {
	// 	port: 8080,
	// 	host: 'localhost',
	// 	publicPath: 'http://localhost:8080',
	// 	hot: true,
	// 	headers: {'Access-Control-Allow-Origin': '*'}
	// },
  node: {
		console: true // needed for html5-history package
	}
}