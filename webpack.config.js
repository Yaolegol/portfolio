const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
        },
        devtool: isProduction ? false : "source-map",
        entry: "./src/index.jsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProduction
                ? "[name].[contenthash].js"
                : "[name].[hash].js",
        },
        module: {
            rules: [
                // babel
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                // less modules
                {
                    test: /\.module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                esModule: true,
                                modules: {
                                    localIdentName: isProduction
                                        ? "[hash:base64]"
                                        : "[local]",
                                },
                                url: false,
                            },
                        },
                        "postcss-loader",
                        "less-loader",
                    ],
                },
                // less
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            },
                        },
                        "postcss-loader",
                        "less-loader",
                    ],
                },
                // css
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                    ],
                },
                // images
                {
                    test: /\.(png|jpg)$/,
                    use: ["file-loader"],
                },
                // svg
                {
                    test: /\.svg$/,
                    loader: "svg-sprite-loader",
                    options: {
                        extract: true,
                    },
                },
                // fonts
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ["file-loader"],
                },
            ],
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
        plugins: [
            new SpriteLoaderPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: "src/icons",
                        to: "icons",
                    },
                    {
                        from: "src/images",
                        to: "images",
                    },
                ],
            }),
            new HtmlWebPackPlugin({
                filename: "index.html",
                template: "src/index.html",
                title: "My app",
            }),
            new MiniCssExtractPlugin({
                ignoreOrder: true,
            }),
            new CleanWebpackPlugin(),
        ],
        resolve: {
            extensions: [".js", ".jsx"],
            modules: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "node_modules"),
            ],
        },
    };
};
