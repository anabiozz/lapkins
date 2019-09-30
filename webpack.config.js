var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
		'webpack-hot-middleware/client',
      // bundle the client for hot reloading
    'babel-polyfill',
    './frontend/index.jsx'
    // the entry point of our app
  ],
  output: {
		filename: 'bundle-dev.js',
    // the output bundle
    path: path.resolve(__dirname, 'backend/static'),
    publicPath: '/bundle/'
    // necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        // include: path.resolve(__dirname, "./frontend"),
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
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: 8080,

    // historyApiFallback: true,
    // // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
