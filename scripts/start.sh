#!/bin/bash
docker stop php

docker build -t php -f Dockerfile .

docker run --rm -p 8080:80 \
        -p 443:443 \
        -p 3306:3306 \
        --name php \
        -v $(pwd)/config/nginx-sites/:/etc/nginx/sites-available/ \
        -v $(pwd)/angular/:/var/www/html/angular/ \
        -v $(pwd)/vendor/codeigniter/framework:/var/www/html/ci-api \
        -d php

docker exec -it php bash