import express from 'express'
const server = express()

import contactForm from './routes'
server.use(express.json())

// Routes
server.use('/add-user', contactForm)

export default server

// Previously we've used:
// server.use(express.urlencoded({ extended: false }))

// Add the endpoint for handling form submissions
// try {
//   const { name, email, message } = req.body
// Insert the data into the contactForm table using the knex instance
// await knex('contactForm').insert({ name, email, message })

// Send a confirmation response back to the frontend
//     res.status(200).json({ message: 'Form submitted successfully' })
//   } catch (error) {
//     console.error(error)
//     res
//       .status(500)
//       .json({ message: 'An error occurred while submitting the form' })
//   }
// })
