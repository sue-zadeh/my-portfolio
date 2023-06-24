exports.up = function (knex) {
  return knex.schema.createTable('contactForm', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('message')
  })
}

exports.down = function (knex) {
  return knex.schema.createTable('contactForm')
}
