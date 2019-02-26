const webpack = require('webpack');
const path = require('path');
const library = '[name]_lib';
module.exports = {
    entry: {
        vendors: ['vue', 'vuex', 'vue-router', 'axios']
    },
    output: {
        path: path.join(__dirname, 'public/js/dist'),
        filename: '[name].dll.js',
        publicPath: '/',
        library
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, 'public/js/dist/[name]-manifest.json'),
            name: library
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
    ],
    devtool: ''
};