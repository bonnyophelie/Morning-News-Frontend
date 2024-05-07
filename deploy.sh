#! /bin/bash

echo IMAGE="$1" > .env

if [ "$1" == "$IMAGE_NAME:pre-prod" ]; then
    sudo docker login $CI_REGISTRY -u $CI_REGISTRY_USER -p $GITLAB_PAT
else :
    sudo docker login -u $DOCKER_REGISTRY_USER -p $DOCKER_PAT
fi

if sudo docker compose ps | grep -q "Up"; then
    sudo docker compose down && sudo docker rmi $1 && sudo docker compose up -d 
else :
    sudo docker compose up -d
fi