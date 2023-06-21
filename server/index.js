const express = require('express')
const app = express()
const router = require('./routes')

// ... any other middleware setup

app.use(express.json())
app.use('/api', router)

// ... any other server configuration

const PORT = process.env.PORT || 5173

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
