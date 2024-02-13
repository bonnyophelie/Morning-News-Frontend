#! /usr/bin/env bash

if [ sudo docker compose ps -q > /dev/null 2>&1 ]; then
    sudo docker compose down && sudo docker compose up -d
else :
    sudo docker compose up -d
fi
