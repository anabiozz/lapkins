#!/bin/bash
yarn build-dev
docker build -t anabiozz/lapkins-client .
docker push anabiozz/lapkins-client
ssh root@165.22.92.145 'bash -s' < docker-reloader.sh;