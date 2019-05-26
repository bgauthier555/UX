var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode : 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'UX.js',
        library: 'UX',
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};