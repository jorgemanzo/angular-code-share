FROM golang

ENV DEBIAN_FRONTEND="noninteractive"
RUN echo "US/Pacific" > /etc/timezone
RUN echo "tzdata tzdata/Areas select US" > /tmp/preseed.txt; \
    echo "tzdata tzdata/Zones/US select Pacific" >> /tmp/preseed.txt; \
    debconf-set-selections /tmp/preseed.txt && \
    rm /etc/timezone && \
    apt-get update --fix-missing

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get update -y \
    && apt-get install -y mariadb-server nodejs

RUN npm install -g @angular/cli

RUN go get -u github.com/go-sql-driver/mysql

COPY ./scripts/container-entrypoint.sh /root/launch.sh
COPY ./scripts/schema.sql /root/init.sql
RUN chmod -R 777 /root/*

ENTRYPOINT ["/root/launch.sh"]