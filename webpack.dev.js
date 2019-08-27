const path = require('path')
const webpack = require('webpack')

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ["@babel/polyfill", "react"],
    app: ["./frontend/index.js"]
  },
  output: {
    path: path.join(__dirname, 'backend/static'),
    filename: 'bundle-dev.js',
    publicPath: coreUrl + 'dist'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
    ],
  },
  plugins: [
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