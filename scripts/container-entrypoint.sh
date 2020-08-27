#!/usr/bin/env bash

service mysql start
mysql < /root/init.sql
# cd /var/www/html/go/
# go build -o build/ api.go
# ./build/api &
cd /var/www/html/angular/
ng serve --host 0.0.0.0 --port 8080