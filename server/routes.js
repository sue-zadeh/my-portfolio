const express = require('express')
const router = express.Router()
const dataService = require('./dataService')

router.post('/contactme', (req, res) => {
  const newContact = req.body

  dataService.addContact(newContact)

  res.status(201).json({ message: 'Contact added successfully' })
})

module.exports = router // Export the router directly without wrapping it in an object
