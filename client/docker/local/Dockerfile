ARG NODE_VERSION=16-alpine3.12

FROM node:${NODE_VERSION}

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

RUN mkdir -p node_modules/.cache && \
    chmod -R 777 node_modules/.cache

COPY package*.json ./

RUN npm install

COPY . ${APP_HOME}

CMD ["npm","start"]