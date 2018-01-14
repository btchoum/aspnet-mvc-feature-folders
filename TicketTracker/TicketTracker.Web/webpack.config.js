/// <binding BeforeBuild='Run - Development' />
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'jquery-validation',
            'jquery-validation-unobtrusive-umd-fix'
        ],
        CreateTicket: "./Features/Tickets/CreateTicket.component.ts"
    },

    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",

            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })
    ]
};