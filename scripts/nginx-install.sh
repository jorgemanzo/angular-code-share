#!/bin/sh
echo "US/Pacific" > /etc/timezone
echo "tzdata tzdata/Areas select US" > /tmp/preseed.txt;
echo "tzdata tzdata/Zones/US select Pacific" >> /tmp/preseed.txt;

apk update && apk upgrade
apk add php7 php7-fpm php7-curl php7-mysqli php7-xml unzip
