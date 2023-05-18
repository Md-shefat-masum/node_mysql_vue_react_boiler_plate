module.exports = function(app){
    // ************************************
    // This is the real meat of the example
    // ************************************

    // Step 1: Create & configure a webpack compiler
    var webpack = require("webpack");
    var webpackConfig = require("../webpack.config")();
    var compiler = webpack(webpackConfig);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(
        require("webpack-dev-middleware")(compiler, {
            publicPath: webpackConfig.output.publicPath,
        })
    );

    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(
        require("webpack-hot-middleware")(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000,
        })
    );
}
