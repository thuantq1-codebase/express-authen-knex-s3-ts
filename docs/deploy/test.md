# Deployment

## Prerequisite

Install following dependencies beforehand.

- Install git
- Install aws-cli
- [Install docker](../install-docker.md)
- Install docker-compose >= 1.28.5

## Setup aws credentials

```bash
aws configure
```

## Start project

Open vscode with wsl

```bash
git clone ${REPO_URL}
cd /path/to/project
cd docker/test
bash ./start-app.sh
```

Go [http://localhost:5555](http://localhost:5555) to open pgadmin. The login email is admin@com.vn and the password is admin.
Go [http://localhost:4000](http://localhost:4000) to open api.
