const express = require('express')
const app = express()
const knex = require('knex')
const knexConfig = require('../knexfile') // Updated path to knexfile.js

// Initialize Knex instance
const knexInstance = knex(knexConfig.development)

app.use(express.json())

// Endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Insert the form data into the contactForm table using Knex
    await knexInstance('contactForm').insert({ name, email, message })

    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred' })
  }
})

const port = 5173
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
