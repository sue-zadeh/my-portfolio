const { getMaxListeners } = require('superagent')

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('contactForm').del()
  await knex('contactForm').insert([
    { id: 1, name: 'sue', email: 'raisianz@gmail.com', message: 'hi...' },
    { id: 2, name: 'susan', email: 'raisianz@gmail.com', message: 'hello..' },
    { id: 3, name: 'sara', email: 'raisianz@gmail.com', message: 'hiya' },
  ])
}
