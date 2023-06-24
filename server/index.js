const express = require('express')
const path = require('path')
const server = express()
const routes = require('./routes')

server.get('/contactMe', (req, res) => {
  const formPath = path.join(__dirname, 'contactData.json')
  res.sendFile(formPath)
})

server.use(express.json())
server.use(routes)

const port = 5173
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${5173}`)
})
