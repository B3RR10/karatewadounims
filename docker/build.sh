#!/usr/bin/env sh

docker build -f ./Dockerfile-zola -t registry.berrio.dev/zola .
docker push registry.berrio.dev/zola
