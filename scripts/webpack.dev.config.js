const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const publicPath = 'http://localhost:8082/';

module.exports = merge(baseConfig, {
    devtool: 'source-map',

    devServer: {
        port: '8082',
        publicPath,
        compress: true,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        open: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    }
});