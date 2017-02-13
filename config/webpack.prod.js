var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
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
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
