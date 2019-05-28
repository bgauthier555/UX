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
    plugins :[

    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};