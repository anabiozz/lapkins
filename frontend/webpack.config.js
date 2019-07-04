const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'
let home = ''

module.exports = (env, options) => {

  if (options.mode == 'production') {
    home = '/home/lapkin';
  } else {
    home = process.env.HOME;
  }

  return {
    output: {
      path: path.resolve(__dirname, '../backend/static'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
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
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
          }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts',
            },
          }],
        },
        {
          test: /\.(png|svg|jpg|jpeg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images',
            },
          }],
        }
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          HOME: JSON.stringify(home),
          CORE_URL: JSON.stringify(coreUrl),
        },
      }),
    ],
  }
}