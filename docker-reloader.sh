#!/bin/bash
cd /root/lapkins-client; docker-compose stop && docker-compose pull && docker-compose up -d --build;