// Generated using webpack-cli https://github.com/webpack/webpack-cli
require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
// const { VueLoaderPlugin } = require("vue-loader");

const isProduction = process.env.NODE_ENV == "production";
const JS_FROM_SERVER = process.env.npm_lifecycle_event == "server" || false;
const WEBPACK_HTML_SERVE = process.env.NODE_ENV == "serve" || false;

const config = {
    entry: {
        index: ["./resources/js/app.js"],
        // index: ["./resources/js/react/app.js"],
        // index: ["./resources/js/vue/app.js"],
        appcss: {
            import: "./resources/scss/app.scss",
            filename: "../css/app",
        },
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/js"),
        clean: {
            dry: true, // Log the assets that should be removed instead of deleting them.
        },
    },
    devServer: {
        open: true,
        host: "localhost",
        compress: true,
        liveReload: false, // reload each time on pressing ctrl+s
        hot: true, // reload webpage on changing source files
        watchFiles: ["resources/js/*", "public/*"],
        client: {
            // progress: true,
            overlay: true,
            reconnect: true,
        },
        static: {
            directory: path.join(__dirname, "public"),
            publicPath: "/", // file access as /avatar.png
        },
    },
    plugins: [
        // new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "../css/app.css",
        }),
        // Add your plugins here
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        // "@babel/preset-react", // for react
                    ],
                },
            },
            // {
            //     test: /\.vue$/,
            //     loader: "vue-loader",
            // },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".*", ".js", ".jsx", ".scss", ".css", ".vue", ".json"],
    },
};

module.exports = () => {

    if (JS_FROM_SERVER) {
        console.log("\n\n js is running from the server \n\n");
        config.entry.index.push(
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
        );
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    if (WEBPACK_HTML_SERVE) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/test.html"),
                // filename: path.resolve(__dirname, "public/index.html"), //output directory
            })
        );
    }
    if (isProduction) {
        config.mode = "production";
        // config.plugins.push(new MiniCssExtractPlugin());
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};
