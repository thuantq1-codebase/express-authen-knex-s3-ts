# Deployment

There are two methods to start project with development.

## Start with docker

### Prerequisite

Install following dependencies beforehand.

- Install git
- [Setup git](../setup-git.md)
- Install Vscode
- [Setting vscode](../setting-vscode.md)
- Install aws-cli
- [Install docker](../install-docker.md)
- Install docker-compose >= 1.28.5

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
cd docker/development
bash ./start-app.sh
```

Go [http://localhost:180](http://localhost:180) to open phpmyadmin.

Go [http://localhost:4000](http://localhost:4000) to open api.

## Start with local

### Prerequisite

Install following dependencies beforehand.

- Install git
- [Setup git](../setup-git.md)
- Install vscode
- [Setting vscode](../setting-vscode.md)
- Install aws-cli
- [Install docker](../install-docker.md)
- Install docker-compose >= 1.28.5
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
cd docker/development
bash ./start-tools.sh
npm run start:dev
```

Go http://localhost:180 to open pgadmin.
Go [http://localhost:4000](http://localhost:4000) to open api.

## Limit of project

- [Upload file limit 5GB](./docs/s3-service.md).
- Problem save url to db and upload S3 simulsimultaneously.

## Troubleshooting

If lint-stage, husky and prettier was not working, please execute more following command

```bash
npm install mrm mrm-task-lint-staged --save-dev
npx mrm lint-staged
npm uninstall mrm mrm-task-lint-staged
```
