'use strict';
const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const isProd = true;

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    pinch: './pinch.scss',
    'pinch.reset': './pinch.reset.scss',
  },
  output: {
    filename: '[name].min.css'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: isProd,
      extract: true,
      usePostCSS: true,
    }),
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true, map: { inline: false } },
    }),
  ]
};
