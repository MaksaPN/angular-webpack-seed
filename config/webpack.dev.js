const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css"
});

const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [{
      test: /\.scss$/,
      loader: extractSass.extract({
        loader: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        fallbackLoader: 'style-loader'
      })
    }]
  },

  plugins: [
    extractSass
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
