#!/usr/bin/env bash

service nginx start
service mysql start
mysql < /root/init.sql > output
echo output
php-fpm