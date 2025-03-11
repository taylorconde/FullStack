const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development", // Define o modo para desenvolvimento ou produção

    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Limpa a pasta dist antes de gerar novos arquivos
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'], // Transpila com Babel
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Diretório para arquivos estáticos
        },
        watchFiles: [path.join(__dirname, "dist")], // Observa mudanças na pasta dist
        liveReload: true,
        open: true, // Abre o navegador automaticamente
        port: 8080, // Porta do servidor
    },

    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
    ],
};