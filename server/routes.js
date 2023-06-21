const express = require('express')
const router = express.Router()
const dataService = require('./dataService')

router.get('/contactme', (req, res) => {
  res.send(`${name}, ${email}, ${message}`)
  try {
    res.json(data.contactme)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch leaderboard data' })
  }
})

router.post('/contactme', (req, res) => {
  const newContact = req.body

  dataService.addContact(newContact)

  res.status(201).json({ message: 'Contact added successfully' })
})

module.exports = router // Export the router directly without wrapping it in an object
