const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './frontend'],
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
        exclude: '/node_modules/',
        loader: ['babel-loader'],
        include: path.join(__dirname, 'frontend')
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|otf)([?]?.*)$/,
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

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(process.env.CORE_URL ? process.env.CORE_URL : '/'),
        DEV: JSON.stringify(true),
      },
    }),
  ],
};