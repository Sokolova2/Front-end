
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader' 
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Main Page',
            template: "./src/pages/index.html",
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'News Page',
            template: "./src/pages/news.html",
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Photo Page',
            template: "./src/pages/photo.html",
            filename: 'photo.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Rozklad Page',
            template: "./src/pages/rozklad.html",
            filename: 'rozklad.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'images' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', 
        }),
    ],
} 