const path = require('path')
const webpack = require('webpack')

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './frontend/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-dev.js',
    publicPath: coreUrl + 'dist'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(coreUrl),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}