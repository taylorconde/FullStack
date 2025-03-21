const path = require("path");

module.exports = {
    mode: "development",

    entry: {
        index: './src/index.js', // Arquivo de entrada principal
    },

    output: {
        filename: '[name].bundle.js', // Nome do arquivo de saída
        path: path.resolve(__dirname, "dist"), // Diretório de saída
        clean: true, // Limpa o diretório de saída antes de gerar novos arquivos
    },

    module: {
        rules: [
            {
                test: /\.js$/, // Testa todos os arquivos .js
                exclude: /node_modules/, // Corrigido o erro de digitação
                use: ['babel-loader'], // Utiliza o Babel para transpilar o código
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Serve arquivos da pasta dist
        },
        watchFiles: [path.join(__dirname, "src")], // Monitora mudanças no diretório src
        liveReload: true, // Atualização automática do navegador
        open: true, // Abre o navegador automaticamente
        port: 8080, // Porta para o servidor de desenvolvimento
    },
};