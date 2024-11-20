FROM node:23.2.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 5500

CMD [ "npm", "run", "dev" ]
