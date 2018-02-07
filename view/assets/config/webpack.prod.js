const webpack = require('webpack');
const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].bundle.js',
        // publicPath: publicPath,
        sourceMapFilename: '[name].[chunkhash].map'
    },

    modules: {
        loaders: [
            {
               test: /\.scss$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: [
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
               })
           }
        ]
    }

    plugins: [
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
}
