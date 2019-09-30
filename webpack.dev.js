var path = require('path');
var webpack = require('webpack');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'
process.env.NODE_ENV = "development"

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr', './frontend'],
  output: {
    path:  path.resolve(__dirname, "backend/static"),
    filename: 'bundle-dev.js',
    publicPath: "/",
    hotUpdateChunkFilename: 'static/hot/[hash].hot-update.js',
    hotUpdateMainFilename: 'static/hot/[hash].hot-update.json',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 10000,
    poll: 5000
  },
  module: {
    rules: [ 
      {
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
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(coreUrl),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}