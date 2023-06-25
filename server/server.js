const express = require('express')
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const db = knex(config.development)
const app = express()
const port = 5173

app.use(express.json())

// Serve static files from the "dist" directory
app.use(express.static('dist'))

// Add the endpoint for handling form submissions
app.post('/ContactMe', async (req, res) => {
  try {
    const { name, email, message } = req.body
    // Insert the data into the contactForm table using the knex instance
    await knex('contactForm').insert({ name, email, message })

    // Send a confirmation response back to the frontend
    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred while submitting the form' })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
