#!/bin/bash

cd "$(dirname "$0")"

docker-compose \
  -f docker-compose.local.yml \
  -f docker-compose.localdb.yml \
  -f docker-compose.localstack.yml \
  up -d --build
