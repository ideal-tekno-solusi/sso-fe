FROM node:24.7-alpine3.21

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g serve

CMD [ "serve", "-s", "dist" ]