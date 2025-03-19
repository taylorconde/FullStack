const path = require("path");

module.exports = {
    mode: "development",

    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        watchFiles: [path.join(__dirname, "src")],
        liveReload: true,
        open: true,
        port: 8080,
    },
};