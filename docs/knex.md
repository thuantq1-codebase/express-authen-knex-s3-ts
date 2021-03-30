# Knex.js

Knex.js http://knexks.org/ is a SQL query builder for Postgres.
This project is supported by it for building queries and migrating database.
This document aims to explain how to use it very quickly. Read the official doc for detail information.

## Migration

You can find `./knex/migrations` directory to store definition of db schema, and `./knex/seeds` directory to store initialization data.

Development `seeds` can differ from production `seeds`, so the seeds directory have some directories corresponding to the environment variable.

### Run migration

Execute following command to run migration.

```bash
cd /path/to/project
env=[development|test|production] npm run knex migrate:latest
```

### Rollback

Execute following command to rollback the recent migration

```bash
cd /path/to/project
env=[development|test|production] npm run knex migrate:rollback
```

### Generate migration files

To create migration files and/or seeds files, you can run a single command.

```bash
cd /path/to/project

## Create schema file
env=[development|test|production] npm run knex migrate:make ${fileName} -x ts

## Create seed file
env=[development|test|production] npm run knex seed:make ${fileName} -x ts
```

### Apply seeds locally

```bash
cd /path/to/project
env=[development|test|production] npm run knex seed:run
```
