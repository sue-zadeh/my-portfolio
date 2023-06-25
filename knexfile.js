module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.squlite3',
    },
    migrations: {
      directory: './migrations', // Update with the migrations directory path
    },
    seeds: {
      directory: './seeds', // Update with the seeds directory path
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost', // Update with your database host
      database: 'contactForm', // Update with your database name
      user: 'raisianz@gmail.com', // Update with your database username
      password: '123***Sue', // Update with your database password
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations', // Update with the migrations directory path
    },
    seeds: {
      directory: './seeds', // Update with the seeds directory path
    },
  },
}
