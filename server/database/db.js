const environment = process.env.NODE_ENV || 'development'
const connection = knex(config[environment])

const User = {
  id: null,
  name: '',
  email: '',
  message: '',
}

export function getUser(id, db = connection) {
  return db('ContactMe')
    .select()
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw new Error(`User with id ${id} not found`)
      }
      return user
    })
}

export function addNewUser(newUser, db = connection) {
  return db('ContactMe')
    .insert(newUser)
    .then((ids) => ids[0])
}
