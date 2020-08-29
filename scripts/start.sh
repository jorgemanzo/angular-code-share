#!/bin/bash
docker stop go

docker build -t go -f Dockerfile .

docker run --rm -p 4200:4200 \
        -p 3306:3306 \
        --name go \
        -v $(pwd)/orca/:/var/www/html/orca/ \
        -d go

# docker exec -it go bash