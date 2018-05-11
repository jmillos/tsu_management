const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    plugins: [
        new ExtractTextPlugin("main.css"),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
});
