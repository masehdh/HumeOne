FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY wait-for-it.sh /wait-for-it.sh

USER root

RUN apt-get update -y && apt-get dist-upgrade -y && apt-get autoremove -y
RUN npm install && chmod 755 /wait-for-it.sh

COPY . .