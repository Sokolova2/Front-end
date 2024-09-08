
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'), 
        port: 9000, 
        open: true, 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Main Page',
            template: "./src/pages/index.html",
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'About Page',
            template: "./src/pages/about.html",
            filename: 'about.html'
        }),
    ],
} 