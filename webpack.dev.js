const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ["@babel/polyfill", "react"],
    app: ["./frontend/index.j"]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-dev.js',
    publicPath: coreUrl + 'dist'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
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
    new HtmlWebpackPlugin({
      inject: true,
    }),
  ],
}

/**
 * We dynamically generate the HTML content in development so that the different
 * DLL Javascript files are loaded in script tags and available to our application.
 */
function templateContent() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString();

  return html;
  // if (!dllPlugin) { return html; }
  //
  // const doc = cheerio(html);
  // const body = doc.find('body');
  // const dllNames = !dllPlugin.dlls ? ['reactBoilerplateDeps'] : Object.keys(dllPlugin.dlls);
  //
  // dllNames.forEach((dllName) => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`));
  //
  // return doc.toString();
}