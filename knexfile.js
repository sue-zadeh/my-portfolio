module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/database/dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/database/migrations',
      extension: 'js',
    },
    seeds: {
      directory: './server/database/seeds',
      extension: 'js',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './server/database/migrations',
      extension: 'js',
    },
    seeds: {
      directory: './server/database/seeds',
      extension: 'js',
    },
  },
}
