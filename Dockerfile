FROM node:8.9.0-alpine

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package.json /srv/app/server

RUN yarn

COPY .babelrc /srv/app/server
COPY .env /srv/app/server
COPY backend/ /srv/app/server/backend
COPY frontend/ /srv/app/server/frontend
COPY webpack.dev.js /srv/app/server
COPY webpack.prod.js /srv/app/server

CMD ["yarn", "start-dev"]