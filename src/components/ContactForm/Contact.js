import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

import './Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vubybgv',
        'template_gcrxk6p',
        form.current,
        '7PlcM1Yg1FRTPrQaN',
      )
      .then(
        result => {
          console.log(result.text)
          e.target.reset()
        },
        error => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>

          <span>Contact me</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" name="Send" className="button" />
        </form>
      </div>
    </div>
  )
}

export default Contact
