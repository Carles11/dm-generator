// @ts-nocheck

import { useState } from 'react'
import styles from 'styles/ContactForm.module.scss'
import 'styles/ContactForm.module.scss'

const ContactForm = () => {
  const [sendEffect, setSendEffect] = useState(false)

  const runSendEffect = () => {
    document.body.classList.add(styles.sent)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)

    const formData = {}

    for (let [key, value] of form) {
      formData[key] = value
    }

    try {
      const response = true
      if (response) {
        // Hide your form
        runSendEffect()

        setSendEffect(true)
      } else {
        console.error(response)
        setSendEffect(false)
      }
    } catch (error) {
      console.error(error)
      setSendEffect(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <small>Enter message (optional) and click button &quot;Send&quot;</small>
      <div className={`${styles.wrapper} ${styles.centered}`}>
        <article className={styles.letter}>
          <div className={styles.side}>
            <p>
              <textarea placeholder="Your message"></textarea>
            </p>
            <p>
              <input type="text" placeholder="Your name" />
            </p>
            <p>
              <input type="email" placeholder="Your email" />
            </p>
            <p>
              <button id="sendLetter">Send</button>
            </p>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      <p className="result-message centered">Thank you for your message</p>
    </form>
  )
}

export default ContactForm
