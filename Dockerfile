FROM ubuntu

ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true

RUN echo "US/Pacific" > /etc/timezone
RUN echo "tzdata tzdata/Areas select US" > /tmp/preseed.txt; \
    echo "tzdata tzdata/Zones/US select Pacific" >> /tmp/preseed.txt; \
    debconf-set-selections /tmp/preseed.txt && \
    rm /etc/timezone && \
    apt-get update --fix-missing

RUN apt install -y curl php-fpm php-curl php-mysqli php-xml nginx \
    build-essential vim
RUN apt install -y mariadb-server

EXPOSE 80
EXPOSE 443
EXPOSE 3306

COPY ./config/nginx-sites/api.conf /etc/nginx/sites-available/api.conf
COPY ./config/nginx-sites/default.conf /etc/nginx/sites-available/default.conf
COPY ./config/fastcgi.conf /etc/nginx/snippets/fastcgi-php.conf
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/certs/nginx-selfsigned.crt /etc/nginx/ssl/localhost.crt
COPY ./config/certs/nginx-selfsigned.key /etc/nginx/ssl/localhost.key
COPY ./angular/dist/angular-code-share/ /var/www/html/angular/
COPY ./codeigniter/ /var/www/html/ci-api
COPY ./scripts/nginx-install.sh /root/launch.sh
RUN chmod -R 777 /root/*

# ENTRYPOINT ["/root/launch.sh"]