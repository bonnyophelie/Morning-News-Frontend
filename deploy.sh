#! /usr/bin/env bash

if [ "$(docker ps -a | grep -c "frontend")" -gt 0 ]; then
    sudo docker stop "frontend" && sudo docker rm "frontend"
else :
    sudo docker compose up -d
fi
