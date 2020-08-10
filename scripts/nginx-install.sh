#!/usr/bin/env bash

service nginx start
service mysql start
sleep 15s
mysql < /root/init.sql
php-fpm