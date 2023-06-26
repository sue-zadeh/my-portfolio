const knex = require('knex')
const config = require('../../knexfile')

const environment = process.env.NODE_ENV || 'development'
const connection = knex(config[environment])

function addNewUser(newUser) {
  return connection('contactForm')
    .insert(newUser)
    .then((ids) => ids[0])
}

module.exports = { addNewUser }
