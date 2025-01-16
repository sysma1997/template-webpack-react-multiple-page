const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

// Use this plugin to push backend code to servers like apache or nginx
// const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/pages/index.tsx",
        "./example/index": "./src/pages/example/index.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename: "index.html",
            template: "./src/pages/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            title: "Example",
            filename: "example/index.html",
            template: "./src/pages/index.html",
            chunks: ["./example/index"]
        }),

        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/others/entry.txt", to: "./assets/others/entry.txt" },
                { from: "./src/assets/others/plugins.txt", to: "./assets/others/plugins.txt" }
            ]
        })
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    }
}