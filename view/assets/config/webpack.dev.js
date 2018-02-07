const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(commonConfig, {

    /**
     * Disable debug mode for production.
     *
     * See: http://webpack.github.io/docs/configuration.html#debug
     */
    // debug: true,
    devtool: 'source-map',

    devServer: {
        port: 8020,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        inline: true,
        host: 'localhost', //'192.168.2.196',
        https: false
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
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
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("main.css")
    ]
});
