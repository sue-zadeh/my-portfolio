const express = require('express')
const routes = require('./routes')
const { join } = require('path')
const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(express.static(join(__dirname, '..', 'dist')))
server.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'dist', 'index.html'))
  })
}

server.listen(port, () => {
  console.log('Listening on port', port)
})
