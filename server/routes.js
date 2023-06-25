const express = require('express')
const router = express.Router()
import * as db from '../db'

// const dataService = require('./dataServer')

router.get('/:ContactMe', async (req, res) => {
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

router.post('/', async (req, res) => {
  try {
    const user = req.body
    console.log(user)

    await db.addNewUser(user)
    res.status(201).json({ message: 'Contact added successfully' })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

export default router
