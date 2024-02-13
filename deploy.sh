#! /usr/bin/env bash

if [ "$(sudo docker compose ps -a)" -gt 0 ]; then
    sudo docker compose down
else :
    sudo docker compose up -d
fi
