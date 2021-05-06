# Deployment

## Prerequisites

1. Must have a account AWS

## Initilization

1. Create a S3 Bucket

Go to S3 AWS and then create a bucket as ${S3_BUCKET} and finally execute following command.

```bash
cd /path/to/project/src/pre-start/env
vi production.env
S3_BUCKET=${S3_BUCKET}
```

2. Create database

Go to RDS and then create mysql DB and finally execute following command.

```bash
cd /path/to/project/src/pre-start/env
vi production.env
DB_MASTER_HOST=${DB_MASTER_HOST}
DB_SLAVE_HOST=${DB_SLAVE_HOST}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}
DB_NAME=${DB_NAME}
```

3. Setup the other information

Please execute following command.

```bash
cd /path/to/project/src/pre-start/env
vi production.env
COOKIE_DOMAIN==${COOKIE_DOMAIN=} # Public ip of client server
CORS_ORIGIN_PORT=${CORS_ORIGIN_PORT} # Port of client server
SENTRY_DNS=${SENTRY_DNS}
```

## Start project

```bash
git clone ${REPO_URL}
cd /path/to/project
npm install
npm run build
npm run start
```

Go [http://public_ip:4000](http://public_ip:4000) to open api.
