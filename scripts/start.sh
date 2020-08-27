#!/bin/bash
docker stop go

docker build -t go -f Dockerfile .

docker run --rm -p 8080:8080 \
        -p 8081:8081 \
        -p 3306:3306 \
        --name go \
        -v $(pwd)/angular/:/var/www/html/angular/ \
        -v $(pwd)/go/:/var/www/html/go/ \
        -d go

docker exec -it go bash