FROM node:carbon

WORKDIR /usr/app/

WORKDIR /usr/app/server/

COPY server/package*.json ./

RUN yarn

COPY server/ ./

EXPOSE 8080
CMD [ "yarn", "start" ] 