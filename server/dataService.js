// // const { promises } = require('nodemailer/lib/xoauth2')
// // const { getMaxListeners } = require('superagent')
// const fs = require('fs')
// const express = require('express')
// const nodemailer = require('nodemailer')
// const app = express
// const port = 3000

// function addContact(newContact) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'raisianz@gmail.com',
//       pass: '123***Sue',
//     },
//   })

//   const mailOptionsToMyself = {
//     from: 'your_email@gmail.com',
//     to: 'raisianz@gmail.com', // my email
//     subject: 'New message from contact form of my portfolio',
//     text: `Name: ${newContact.name}\nEmail: ${newContact.email}\nMessage: ${newContact.message}`,
//   }

//   const mailOptionsToUser = {
//     from: 'your_email@gmail.com',
//     to: newContact.email,
//     subject:
//       'Thank you for contacting me. I will contact you as soon as posible',
//     text: `Dear ${newContact.name},\n\nThank you for contacting me.
//      I will get back to you as soon as possible.
//      \n\nYour Message is: ${newContact.message},\n\nBest regards,\nSue`,
//   }

//   transporter.sendMail(mailOptionsToMyself, (error, info) => {
//     if (error) {
//       console.error('Error sending email to myself:', error)
//     } else {
//       console.log('Email sent to myself:', info.response)
//     }
//   })

//   transporter.sendMail(mailOptionsToUser, (error, info) => {
//     if (error) {
//       console.error('Error sending email to user:', error)
//     } else {
//       console.log('Email sent to user:', info.response)
//     }
//   })

//   fs.appendFile.get('/', (req, res) => {
//     sendEmail()
//       .then((response) => res.send(response.message))
//       .catch((error) => res.status(500).send(error.message))
//   })
//   app.listen(5173, () => {
//     console.log(`nodemailerproject is listenng at http://localhost:${5173}`)
//   })
// }

// module.exports = { addContact }

// //   const jsonData = fs.readFileSync(filePath, 'utf8')
// //   const data = JSON.parse(jsonData)

// //   data.contactme.push(newContact)

// //   fs.writeFileSync(filePath, JSON.stringify(data))
