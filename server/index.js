const express = require('express')
const path = require('path')
const server = express()
// const routes = require('./routes')
const knexConfig = require('../knexfile')
const { log } = require('console')
const knex = require('knex')(knexConfig)
const db = knex(config.development)
const port = 5173

async function addFormData(name, email, message) {
  const newFormData = { name: name, email: email, message: message }
  try {
    const contactForm = await db('contactForm').insert(newFormData)
    console.log(`successfuly added data id: ${contactForm}`)
  } catch (err) {
    console.log(err.messag)
  }
}
addFormData(` ${(name, email, message)}`)
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// server.get('/contactMe', (req, res) => {
//   const formPath = path.join(__dirname, 'contactData.json')
//   res.sendFile(formPath)
// })

// server.use(express.json())
// server.use(routes)

// const port = 5173
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${5173}`)
// })

// const express = require('express')
// const app = express()
// const knex = require('knex')
// const knexConfig = require('../knexfile') // Updated path to knexfile.js

// // Initialize Knex instance
// const knexInstance = knex(knexConfig.development)

// app.use(express.json())

// // Endpoint to handle form submission
// app.post('/ContactMe', async (req, res) => {
//   try {
//     const { name, email, message } = req.body

//     // Insert the form data into the contactForm table using Knex
//     await knexInstance('myContactForm').insert({ name, email, message })

//     res.status(200).json({ message: 'Form submitted successfully' })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'An error occurred' })
//   }
// })

// const port = 5173
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`)
// })
