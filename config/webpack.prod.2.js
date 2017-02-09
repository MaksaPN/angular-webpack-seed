var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills', 'manifest'],
            minChunks: Infinity,
        }),

        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest'
        })
    ]
});
