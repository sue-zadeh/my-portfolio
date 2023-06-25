const Environment = 'production' | 'development' | 'test'
constenvironment = process.env.NODE_ENV || 'development'
const connection = knex(config[environment])

const User = {
  id,
  name,
  email,
  message,
}

export function getUser(id, db = connection) {
  return (
    db <
    User >
    'ContactMe'
      .select()
      .where('id', id)
      .first()
      .then((user) => {
        if (!user) {
          throw new Error(`User with id ${id} not found`)
        }
        return user
      })
  )
}

export function addNewUser(newUser, db = connection) {
  return db < User > 'contactForm'.insert(newUser).then((ids) => ids[0])
}
