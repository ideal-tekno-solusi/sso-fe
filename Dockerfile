FROM node:24.7-alpine3.21

WORKDIR /app

COPY . .

RUN npm install

RUN npm build

RUN npm i -g serve

CMD [ "serve", "-s", "dist", "-l", "0", "-p", "8080"]