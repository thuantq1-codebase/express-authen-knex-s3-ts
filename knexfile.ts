import('./src/pre-start')

const connection = {
  host: process.env.DB_MASTER_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  timezone: 'utc',
}

const sslConnection = {
  ...connection,
  ssl: {
    rejectUnauthorized: true,
  },
}

const settings = {
  development: {
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './knex/seeds/development',
    },
    connection,
  },
  test: {
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './knex/seeds/test',
    },
    connection: sslConnection,
  },
  production: {
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './knex/seeds/production',
    },
    connection: sslConnection,
  },
}

const sharedConfig = {
  client: 'postgresql',
  migrations: {
    schemaName: 'public',
    tableName: 'knex_migrations',
    extension: 'ts',
    directory: './knex/migrations',
  },
}

module.exports = {
  ...settings['development'],
  ...sharedConfig,
}
