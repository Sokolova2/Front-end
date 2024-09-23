require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph
    output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: '[name].bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {  // where we defined file patterns and their loaders
        rules: [
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: process.env.ASSET_IMAGES_PATH,
            },
            },
        },
        {
            test: /\.(ttf|woff|woff2)$/,
            use: {
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: process.env.ASSET_FONT_PATH,
            },
            },
        },
        {
            test: /\.(scss|css)$/i,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'stylus-loader'
            ],
        },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: "Webpack Index",
        template: __dirname + "/src/pages/index.html",
        inject: 'body',
        filename: "index.html"
        }),
        new HtmlWebpackPlugin({
        title: "Webpack About",
        template: __dirname + "/src/pages/about.html",
        inject: 'body',
        filename: "about.html"
        }),
        new Dotenv(),
        new MiniCssExtractPlugin({
        filename: process.env.STYLE_FILE
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
    },
}