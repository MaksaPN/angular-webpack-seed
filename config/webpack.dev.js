var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        extractSass,
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    loader: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallbackLoader: 'style-loader'
                })
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
