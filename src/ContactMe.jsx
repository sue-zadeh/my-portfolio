import React, { useState } from 'react'
import NavBar from './NavBar'

function ContactMe() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setShowPopup(false)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setMessage('')
    sendEmail(email, message)
    setShowPopup(true)
  }

  const sendEmail = (email, message) => {
    console.log('Sending email to', email)
    console.log('Message:', message)
  }

  return (
    <div>
      <div className="devNavcontact">
        <NavBar />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="h2-form">Please fill out the form</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {/* Message Popup */}
        {showPopup && (
          <div className="popup">
            <p>Thank you for contacting me!</p>
            <p>A copy of your message has been sent to your email.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactMe
