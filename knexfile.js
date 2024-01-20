// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client:  process.env.LOCAL_CLIENT || 'postgresql',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      database: process.env.DATABASE_LOCAL || 'tinderParaHabilidades',
      user: process.env.USER_LOCAL || 'postgres',
      password: process.env.PWD_LOCAL_DB || 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
