const path = require("path");

module.exports = {
    mode: "development", // Define o modo ('development' ou 'production')

    entry: {
        index: './src/index.js',
        // galaxy: './src/galaxy.js', // Adicionei outro ponto de entrada como exemplo
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Limpa a pasta 'dist' automaticamente
    },

    module: {
        rules: [
            {
                test: /\.js$/, // Aplica a arquivos .js
                exclude: /node_modules/, // Ignora a pasta node_modules
                use: ['babel-loader'], // Utiliza Babel para transpilar o código
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Servir arquivos estáticos
        },
        watchFiles: [path.join(__dirname, "src")], // Observa alterações na pasta 'src'
        liveReload: true, // Recarregamento automático no navegador
        open: true, // Abre o navegador automaticamente
        port: 8080, // Define a porta do servidor
    },
};