const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '..', './build'),
        publicPath: '/wp-content/plugins/tsu-management/view/assets/build/',
        filename: 'bundle.js'
    },

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
                test: /^(?!.*bootstrap\.scss$).*\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }]
                }),
                /*loaders: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]*/
            }, {
                test: /bootstrap.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                }),
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader?limit=8192'
            }
        ]
    }
};
