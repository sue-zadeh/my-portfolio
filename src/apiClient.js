import request from 'superagent'

export async function addTocontactme(newData) {
  try {
    await request.post('/api/contact').send(newData)
  } catch (error) {
    console.error(error)
    throw error
  }
}
