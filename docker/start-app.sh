#!/bin/bash

cd "$(dirname "$0")"

docker-compose --env-file ../src/pre-start/env/development.env \
  -f docker-compose.local.yml \
  -f docker-compose.localapp.yml \
  -f docker-compose.localdb.yml \
  -f docker-compose.localstack.yml \
  up -d --build
