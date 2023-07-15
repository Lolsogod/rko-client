### STAGE 1: Build ###
FROM node:16.20.1 AS build

WORKDIR .
COPY / ./
RUN rm -rf node_modules
RUN rm -rf package-lock.json
#WORKDIR .
RUN npm install
#WORKDIR .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19.0-alpine
ADD /docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /var/www
WORKDIR /var/www
