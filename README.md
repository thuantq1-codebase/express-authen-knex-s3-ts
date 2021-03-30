# Express-Authen-Knex-S3-Ts

There are two methods to start project with development.

## Start with docker

### Prerequisite

- Install aws-cli
- [Install docker](./docs/install-docker.md)

### Setup aws credentials

```bash
aws configure
```

### Start project

```bash
cd docker
./start-container.sh
```

Go [http://localhost:15555](http://localhost:15555) to open pgadmin. The login email is `admin@com.vn` and the password is `admin`.

Go [http://localhost:14000](http://localhost:14000) to accessing api.

## Start with local

### Prerequisite

- Install aws-cli
- Install nodejs

### Setup aws credentials

```bash
aws configure
```

### Start project

```bash
npm run start:dev
```

Go [http://localhost:4000](http://localhost:4000) to accessing api.

## Limit of project

- [Upload file limit 5GB](./docs/s3-service.md).
- Problem save url to db and upload S3 simulsimultaneously.
