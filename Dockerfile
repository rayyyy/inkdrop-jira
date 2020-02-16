FROM node:13.8.0-alpine

RUN apk update
RUN apk add zsh
# RUN npm install -g @angular/cli

WORKDIR /app
COPY . /app