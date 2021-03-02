FROM node:12.13-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD ["node", "dist/main"]
