#! /bin/bash
echo IMAGE="$1" > .env

if [ $1 == "registry.gitlab.com/thedockerdwelers/frontend:"* ]; then
    sudo docker login registry.gitlab.com -u bonny.ophelie -p glpat-YHjHmTc3SiVGSXsZGrRM
else :
    sudo docker login -u bonnyophelie -p dckr_pat_5OPjfn4-CNJFTO9gnD5xH3atUyA
fi

if [ sudo docker compose ps -q -gt 0 ]; then
    sudo docker compose down && sudo docker compose up -d 
else :
    sudo docker compose up -d
fi
