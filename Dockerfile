### Run ###
FROM nginx:alpine
ADD ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app/var/www
