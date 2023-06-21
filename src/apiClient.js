import request from 'superagent'

const API_URL = 'http://localhost:5173/api'

export async function submitForm(name, email, message) {
  const response = await request.post(`${API_URL}/contactme`).send({
    name,
    email,
    message,
  })
  return response.body
}

export async function addTocontactme(newData) {
  const response = await request.post(`${API_URL}/contactme`).send(newData)
  return response.body
}
