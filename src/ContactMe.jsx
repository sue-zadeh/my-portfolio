import React, { useState } from 'react'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform any necessary form submission logic here
    // e.g., sending the data to a server

    // Reset the form after submission
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default ContactForm
