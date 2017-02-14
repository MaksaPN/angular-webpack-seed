var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[chunkhash:8].css"
});

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[id].[chunkhash:8].chunk.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            loader: extractSass.extract({
                loader: [
                    { loader: 'css-loader', options: { minimize: true } },
                    { loader: 'sass-loader' }
                ],
                fallbackLoader: 'style-loader'
            })
        }]
    },

    plugins: [
        extractSass,
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new ManifestPlugin()
    ]
});
