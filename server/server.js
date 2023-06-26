const express = require('express')
const routes = require('./routes')

const server = express()
const port = process.env.PORT || 5173

server.use(express.json())
server.use('/api/add-user', routes)

server.listen(port, () => {
  console.log('Listening on port', port)
})
