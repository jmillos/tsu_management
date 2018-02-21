const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '..', './js'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    /**
     * Developer tool to enhance debugging.
     *
     * The 'source-map' settings is meant to be used in production only. It
     * splits the source map in a separate file and it is slow to compute.
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'source-map', //'eval-source-map'

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/, //^(?!__).+\.css$
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(svg|eot|woff|woff2|ttf|png|jpg)$/,
                loader: 'url-loader?limit=1024000'
            }/*, {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader?limit=8192'
            }*/
        ]
    }
};
