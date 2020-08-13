#!/bin/bash
docker build -t php -f Dockerfile .

docker run --rm -p 8080:80 \
        -p 443:443 \
        -p 3306:3306 \
        --name php \
        -v $(pwd)/angular/:/var/www/html/angular/ \
        -v $(pwd)/vendor/codeigniter/framework:/var/www/html/ci-api \
        -d php
