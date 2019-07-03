#!/bin/bash

cd frontend && npm run build
cd .. && cd backend && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o lapkin .
cd .. && docker build -t anabiozz/lapkin .
docker push anabiozz/lapkin
ssh root@165.22.92.145 'bash -s' < docker-reloader.sh;