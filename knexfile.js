module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/database/dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/database/migrations',
    },
    seeds: {
      directory: './server/database/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'contactForm',
      user: 'sue',
      password: '123***Sue',
    },
    migrations: {
      tableName: 'contactForm',
      directory: './server/database/migrations',
    },
    seeds: {
      directory: './server/database/seeds',
    },
  },
}
