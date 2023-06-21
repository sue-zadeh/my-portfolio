import React, { useState } from 'react'
import { addTocontactme } from './apiClient'
import NavBar from './NavBar'

function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
    setShowPopup(false)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setShowPopup(false)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
    setShowPopup(true)

    try {
      const newData = { name, email, message }
      await addTocontactme(newData)
      setShowPopup(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="devNavcontact">
        <NavBar />
      </div>

      <div className="container">
        <div className="soon">
          <h3>
            <u>
              <i>coming soon</i>
            </u>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="h2-form">Please fill out the form</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />

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

        {showPopup && (
          <div className="popup">
            <p>Thank you for contacting me!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactMe
