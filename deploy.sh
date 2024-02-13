#! /usr/bin/env bash
echo IMAGE="$1" > .env

if [ $1 == "registry.gitlab.com/thedockerdwelers/frontend:pre-prod"]; then
    docker login registry.gitlab.com -u bonny.ophelie -p glpat-DA2xY5Qbi78Nj1M8WCgv
else:
    docker login -u bonnyophelie -p dckr_pat_5OPjfn4-CNJFTO9gnD5xH3atUyA
fi

if [ sudo docker compose ps -q > /dev/null 2>&1 ]; then
    sudo docker compose down && sudo docker compose up -d 
else :
    sudo docker compose up -d
fi
