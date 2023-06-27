const express = require('express')
const routes = require('./routes')
const { join } = require('path')
const server = express()
const port = process.env.PORT || 3000
const nodemailer = require('nodemailer')
require('dotenv').config()

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

server.use(express.json())
server.use(express.static(join(__dirname, '..', 'dist')))
server.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'dist', 'index.html'))
  })
}

server.post('/api/add-user', (req, res) => {
  const { name, email, message } = req.body

  // Send email to the user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'New message from contact form of my portfolio-Sue',
    text: `Dear ${name},\n\nThank you for contacting me.
     I will contact you as soon as possible.
     \n\nYour Message is: ${message}\n\nBest regards,\nSue`,
  }

  transporter.sendMail(userMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to user:', error)
    } else {
      console.log('Email sent to user:', info.response)
    }
  })

  // Send email to yourself with form data
  const yourMailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sarina.rozz@gmail.com',
    subject: 'New contact form submission from my portfolio',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  transporter.sendMail(yourMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to yourself:', error)
    } else {
      console.log('Email sent to yourself:', info.response)
    }
  })

  res.sendStatus(200)
})

server.listen(port, () => {
  console.log('Listening on port', port)
})
