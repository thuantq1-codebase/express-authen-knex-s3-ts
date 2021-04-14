# Codebase for project

Codebase includes some following functions:

- Expressjs
- Knex
- Postgresql
- Authentication with JWT
- Docker
- Typescript

There are two methods to start project with development.

## Start with docker

### Prerequisite

Install following dependencies beforehand.

- [Setup git](./docs/setup-git.md)
- [Setting vscode](./docs/setting-vscode.md)
- Install aws-cli
- [Install docker](./docs/install-docker.md)

### Setup aws credentials

```bash
aws configure
```

### Start project

Open vscode with wsl

```bash
git clone ${REPO_URL}
cd /path/to/project
npm install
# If lint-stage, husky and prettier was not working, please execute more following command
npx mrm lint-stage

cd docker
./start-app.sh
```

Go [http://localhost:5555](http://localhost:5555) to open pgadmin. The login email is `admin@com.vn` and the password is `admin`.

Go [http://localhost:4000](http://localhost:4000) to open api.

## Start with local

### Prerequisite

Install following dependencies beforehand.

- [Setup git](./docs/setup-git.md)
- [Setting vscode](./docs/setting-vscode.md)
- Install aws-cli
- [Install docker](./docs/install-docker.md)
- Install nodejs

### Setup aws credentials

```bash
aws configure
```

### Start project

```bash
git clone ${REPO_URL}
cd /path/to/project
npm install
# If lint-stage, husky and prettier was not working, please execute more following command
npx mrm lint-stage

cd docker
./start-tools.sh
npm run start:dev
```

Go [http://localhost:5555](http://localhost:5555) to open pgadmin. The login email is admin@com.vn and the password is admin.
Go [http://localhost:4000](http://localhost:4000) to open api.

## Limit of project

- [Upload file limit 5GB](./docs/s3-service.md).
- Problem save url to db and upload S3 simulsimultaneously.
