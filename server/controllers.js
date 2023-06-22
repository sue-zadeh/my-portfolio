const fs = require('fs')

const addToContactMe = (req, res) => {
  const { name, email, message } = req.body

  // Load existing data from the JSON file
  const rawData = fs.readFileSync('contactData.json')
  const contactData = JSON.parse(rawData)

  // Add the new contact to the contactme array
  contactData.contactme.push({ name, email, message })

  // Save the updated data back to the JSON file
  fs.writeFileSync('contactData.json', JSON.stringify(contactData))

  res.sendStatus(200)
}

module.exports = {
  addToContactMe,
}
