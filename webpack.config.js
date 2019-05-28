var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        UX: './src/index.js',
    },
    mode : 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: 'UX',
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    plugins :[
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /patch/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};