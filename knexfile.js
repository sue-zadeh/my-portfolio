// import config from './vite.config'
const knex = require('knex')({ client: 'pg' })
let dbConnection = {
  client: 'pg',
  connection: 'dev.sqlite3',
  migrations: {
    extention: 'js',
    directory: './server/database/migrations',
  },
  useNullAsDefault: true,
}
module.exports = {
  development: {
    client: 'sqlite3',
    connection: dbConnection,
    migrations: {
      extention: 'js',
      directory: './server/database/migrations',
    },
    seeds: {
      extention: 'js',
      directory: './server/database/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  },
  migrations: {
    extention: 'js',
    tableName: 'contactForm',
    directory: './server/database/migrations',
  },
  seeds: {
    extention: 'js',
    directory: './server/database/seeds',
  },
}
