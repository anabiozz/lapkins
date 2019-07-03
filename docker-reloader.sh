#!/bin/bash
cd /root/lapkin; docker-compose stop && docker-compose pull && docker-compose up -d --build;