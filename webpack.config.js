const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: "./index.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Match-match-game",
            template: "./template.html",
            filename: "index.html",
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets') },
                { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
              ],
            }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"
            },
             {
                 test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                 type: "asset/resource"
             },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline"
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
        ],
    }  
}