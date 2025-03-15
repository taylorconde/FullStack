const path = require("path");

module.exports = {
    mode: "development",

    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/, // Aplica a arquivos .js
                exclude: /node_modules/,
                use: ['babel-loader'], // Transpilar com Babel
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Servir arquivos estaticos
        },
        watchFiles: [path.join(__dirname, "src")], // Observa alteracoes na pasta src

        liveReload: true,
        open: true, //abre o navegador automaticamente
        port: 8080,
    },
};