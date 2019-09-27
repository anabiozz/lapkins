var path = require('path');
var webpack = require('webpack');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: "./frontend/index.jsx",
  output: {
    path: path.join(__dirname, '/backend/static'),
    filename: '[name]-dev.js',
    publicPath: '/static'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
        use: ['file-loader']
      },
      // {
      //   test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: '[name].[ext]',
      //         publicPath: 'images'
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(coreUrl),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}