const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  // Load existing data from the JSON file
  const rawData = fs.readFileSync('contactData.json')
  const contactData = JSON.parse(rawData)

  // Add the new contact to the contactme array
  contactData.contactme.push({ name, email, message })

  // Save the updated data back to the JSON file
  fs.writeFileSync('contactData.json', JSON.stringify(contactData))

  res.sendStatus(200)
})

app.listen(5173, () => {
  console.log('Server is running on port 5173')
})
