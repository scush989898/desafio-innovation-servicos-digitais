
FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

