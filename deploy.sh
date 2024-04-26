#! /bin/bash
CI_REGISTRY="registry.gitlab.com"
CI_REGISTRY_USER="bonnyophelie"
DOCKER_REGISTRY_USER="bonnyophelie"
echo IMAGE="$1" > .env

if [ "$1" == "$IMAGE_NAME:pre-prod" ]; then
    read -s -p "Enter Gitlab personal access token: " ACCESS_TOKEN
    echo "$ACCESS_TOKEN" | sudo docker login $CI_REGISTRY -u $CI_REGISTRY_USER -password-stdin
    unset ACCESS_TOKEN
else :
    read -s -p "Enter Docker Hub personal access token: " ACCESS_TOKEN
    echo "$ACCESS_TOKEN" | sudo docker login -u $DOCKER_REGISTRY_USER -password-stdin
    unset ACCESS_TOKEN
fi

if sudo docker compose ps | grep -q "Up"; then
    sudo docker compose down && sudo docker rmi $1 && sudo docker compose up -d 
else :
    sudo docker compose up -d
fi