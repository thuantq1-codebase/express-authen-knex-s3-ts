#!/bin/bash

cd "$(dirname "$0")"

docker-compose --env-file ../../src/pre-start/env/test.env \
  -f ../docker-compose.local.yml \
  -f ../docker-compose.localdb.yml \
  -f ../docker-compose.localstack.yml \
  -f ./docker-compose.localapp.yml \
  down
