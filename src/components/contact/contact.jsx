import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

import { BiMailSend } from "react-icons/bi";
import { FiDribbble } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ounotyh', 'template_g8v875j', form.current, 'PeuOvzcJ1YoL_ngmG')
      .then(() => {
        setMessage('Message sent successfully');
        
        // Show alert after successful submission
        window.alert('Your message has been sent successfully');

        // Remove the message after 5 seconds
        setTimeout(() => {
          setMessage('');
        }, 5000);

        // Clear input fields
        form.current.reset();
      }, () => {
        setMessage('Message not sent (service error)');
      });
  };

  return (
    <section id='contact' className='contact'>
      <h5 className='sub-text'>Get In Touch</h5>
      <h2 className='section__title'>Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title e-text">Talk to Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <BiMailSend className='contact__card-icon' />
              <h3 className="contact__card-title e-text">Email</h3>
              <span className="contact__card-data e-text">user@gmail.com</span>

              <a href="mailto:projectpramin@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__button">
                Write Me <FaArrowRight className='contact__button-icon' />
              </a>
            </div>

            <div className="contact__card">
              <FiDribbble className='contact__card-icon' />
              <h3 className="contact__card-title e-text">Dribbble</h3>
              <span className="contact__card-data e-text">user</span>

              <a href="https://dribbble.com/PRAM1N" target="_blank" rel="noopener noreferrer" className="contact__button">
                Write Me <FaArrowRight className='contact__button-icon' />
              </a>
            </div>

            <div className="contact__card">
              <FaFacebookMessenger className='contact__card-icon' />
              <h3 className="contact__card-title e-text">Messenger</h3>
              <span className="contact__card-data e-text">user.me</span>

              <a href="https://www.m.me/pramingopal.shrestha" target="_blank" rel="noopener noreferrer" className="contact__button">
                Write Me <FaArrowRight className='contact__button-icon' />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title e-text">Write me your Project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form" id="contact-form">
            <div className="contact__group">
              <div className="contact__form-div">
                <label htmlFor="name" className="contact__form-tag e-text">Name</label>
                <input type="text" name="user_name" id="name" required placeholder="Insert your name" className="contact__form-input" />
              </div>

              <div className="contact__form-div">
                <label htmlFor="email" className="contact__form-tag e-text">Mail</label>
                <input type="email" name="user_email" id="email" required placeholder="Insert your email" className="contact__form-input" />
              </div>
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag e-text">Project</label>
              <textarea name="user_message" id="message" cols="30" rows="10" required placeholder="Write your project" className="contact__form-input" autoComplete="off"></textarea>
            </div>

            <p className="contact__message" id="contact-message">{message}</p>
            <button type="submit" className="contact__send button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
