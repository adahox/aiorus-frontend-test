/**
 * 
webpack
  - webpack
  - webpack-cli
  - clean-webpack
  - webpack-dev-server

css
   - css-loader
   - style-loader
   - sass-loader
node
   - node-loader

babel
   - babel-loader
   - @babel/core
   - @babel/preset-env

html
    - html-loader
    - html-webpack-plugin
images
    - file-loader
    webpack-dev-server
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|mp3)$/i,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext]'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".js", ".html", ".png", ".jpeg", ".jpg"]
    },

}