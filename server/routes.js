const express = require('express')
const router = express.Router()
import * as db from './database/db'

router.get('/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id)
    // Get the user by id
    const user = await db.getUser(userId)
    // json response
    res.json({ user: user })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.post('/add-user', async (req, res) => {
  try {
    const user = req.body
    await db.addNewUser(user)
    res.status(201).json({ message: 'Contact added successfully' })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

export default router
