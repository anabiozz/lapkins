var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var core_url = process.env.CORE_URL ? process.env.CORE_URL : '/';

module.exports = {
    entry: [
        './frontend/index'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle-prod.js',
        publicPath: '/dist'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false,
            sourceMap: false,
            mangle: true,
            minimize: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
								HOME: JSON.stringify('/home/lapkin'),
                NODE_ENV: JSON.stringify('production'),
                CORE_URL: JSON.stringify(core_url)
            }
        }),
        new CompressionPlugin({ 
            asset: 'bundle-prod.js.gz',
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "."),
                ],
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime']
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    }
}
