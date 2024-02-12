const express = require('express');
const { join } = require('path');
const server = express();
const port = process.env.PORT || 3001;
const nodemailer = require('nodemailer');
require('dotenv').config();

// Correctly require the knex configuration
const knexConfig = require('./database/knexfile');

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];
const knex = require('knex')(config);

module.exports = knex;

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

server.use(express.json());
server.use(express.static(join(__dirname, '..', 'dist')));

if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'dist', 'index.html'));
  });
}

// Make sure this route is async because we are using await inside
server.post('/api/add-user', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Insert form data into the contactForm table
    await knex('contactForm').insert({
      name,
      email,
      message
    });

    // Log the successful insertion
    console.log('Form submission saved:', { name, email, message });

    // Send a success response back to the client
    res.status(200).json({ message: 'Form submission saved.' });
  } catch (error) {
    // Log the error
    console.error('Error inserting data into database:', error);

    // Send an error response back to the client
    res.status(500).json({ error: 'Error saving form submission.' });
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
