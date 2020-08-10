#!/bin/bash
docker run --rm -p 8080:80 \
        -p 443:443 \
        -p 3306:3306 \
        --name php \
        -v $(pwd)/angular/dist/angular-code-share/:/var/www/html/angular/ \
        -v $(pwd)/codeigniter/:/var/www/html/ci-api \
        -d php
