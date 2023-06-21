const fs = require('fs')
const nodemailer = require('nodemailer')

const filePath = './data/contactData.json'

function addContact(newContact) {
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(jsonData)

  data.contactme.push(newContact)

  fs.writeFileSync(filePath, JSON.stringify(data))

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raisianz@gmail.com',
      pass: '1*2*3*Sue',
    },
  })

  const mailOptionsToMyself = {
    from: 'your_email@gmail.com',
    to: 'raisianz@gmail.com', // my email
    subject: 'New message from contact form of my portfolio',
    text: `Name: ${newContact.name}\nEmail: ${newContact.email}\nMessage: ${newContact.message}`,
  }

  const mailOptionsToUser = {
    from: 'your_email@gmail.com',
    to: newContact.email,
    subject:
      'Thank you for contacting me. I will contact you as soon as posible',
    text: `Dear ${newContact.name},\n\nThank you for contacting me. I will get back to you as soon as possible.\n\nBest regards,\nYour Name`,
  }

  transporter.sendMail(mailOptionsToMyself, (error, info) => {
    if (error) {
      console.error('Error sending email to myself:', error)
    } else {
      console.log('Email sent to myself:', info.response)
    }
  })

  transporter.sendMail(mailOptionsToUser, (error, info) => {
    if (error) {
      console.error('Error sending email to user:', error)
    } else {
      console.log('Email sent to user:', info.response)
    }
  })
}

module.exports = { addContact }
