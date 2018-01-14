/// <binding BeforeBuild='Run - Development' />
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'jquery-ui/ui/core.js',
            'jquery-ui/ui/widgets/datepicker.js',
            'jquery-validation',
            'jquery-validation-unobtrusive-umd-fix',
            "bootstrap/dist/css/bootstrap.css",
            "jquery-ui/themes/base/core.css",
            "jquery-ui/themes/base/datepicker.css",
            "jquery-ui/themes/base/theme.css"
        ],
        CreateTicket: "./Features/Tickets/CreateTicket.component.ts",
        Home: "./Features/Home/Home.component.ts"
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
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },

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
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};