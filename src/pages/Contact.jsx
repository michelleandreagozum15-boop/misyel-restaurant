import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <main>
      <section className="contact page-section">
        <div className="container">
          <h1>CONTACT US</h1>

          <div className="contact-details">
            <p>
              <strong>Address:</strong> Brgy.Tiguma
            </p>
            <p>
              <strong>Phone:</strong> 63+++++++
            </p>
            <p>
              <strong>Email:</strong> NoakRestaurant@Gmail.com
            </p>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="4"
              required
            />

            <button type="submit">Send Message</button>

            {sent && (
              <p className="form-status" role="status">
                Thank you! Your message has been prepared. This demo does not
                send emails.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
