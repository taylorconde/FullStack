# Use a imagem base do Nginx
FROM nginx:latest

# Copie os arquivos HTML, CSS e JavaScript para o diretório de documentos do Nginx
COPY index.html /usr/share/nginx/html/
COPY css/style.css /usr/share/nginx/html/css/
COPY js/aplicacao.mjs /usr/share/nginx/html/js/
COPY js/imovel.mjs /usr/share/nginx/html/js/
COPY js/index.mjs /usr/share/nginx/html/js/

