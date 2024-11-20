# Usar uma imagem Node específica
FROM node:16-alpine

# Diretório de trabalho
WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install

# Expor a porta usada pelo servidor
EXPOSE 3000

# Comando padrão para o ambiente de desenvolvimento
CMD ["npm", "run", "dev"]
