FROM php:7.2-fpm

RUN echo "US/Pacific" > /etc/timezone
RUN echo "tzdata tzdata/Areas select US" > /tmp/preseed.txt; \
    echo "tzdata tzdata/Zones/US select Pacific" >> /tmp/preseed.txt; \
    debconf-set-selections /tmp/preseed.txt && \
    rm /etc/timezone && \
    apt-get update --fix-missing

RUN docker-php-ext-install mysqli

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get update -y \
    && apt-get install -y nginx mariadb-server nodejs

RUN npm install -g @angular/cli

EXPOSE 80
EXPOSE 443
EXPOSE 3306

COPY ./config/fastcgi.conf /etc/nginx/snippets/fastcgi-php.conf
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/certs/nginx-selfsigned.crt /etc/nginx/ssl/localhost.crt
COPY ./config/certs/nginx-selfsigned.key /etc/nginx/ssl/localhost.key
COPY ./scripts/nginx-install.sh /root/launch.sh
COPY ./scripts/schema.sql /root/init.sql
RUN chmod -R 777 /root/*

ENTRYPOINT ["/root/launch.sh"]