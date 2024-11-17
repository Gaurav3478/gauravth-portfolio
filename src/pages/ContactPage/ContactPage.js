import React, { useState } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_o2nav1i';
    const templateId = 'template_mwldgx8';
    const publicKey = 'Md5kdU0N6F5zlbxeH';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Gaurav',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div id="contacts" className="container">
      <h1 className="contact-header">Get in Touch</h1>
      <p className="contact-description">
        If you have any questions or just want to reach out, feel free to send me a message. 
        You can use the contact form below or connect with me through email, phone, or LinkedIn.
      </p>

      <div id="contact-div">
        <a
          href="mailto:gaurav.t2002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img
            src="../../../assets/images/Email.png"
            alt="Email"
            className="icon"
          />
          <span>Email:</span> gaurav.t2002@gmail.com
        </a>
        <a href="#contacts" className="contact-item">
          <img
            src="../../../assets/images/Phone.png"
            alt="Phone"
            className="icon"
          />
          <span>Phone:</span> +91 8920633049
        </a>
        <div id="contact-list" className="social-links">
          <a
            href="https://www.linkedin.com/in/gaurav-thakur-1042601b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img
              src="../../../assets/images/Linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
            <span>LinkedIn:</span> Gaurav Thakur
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='emailForm'>
        <h2>Contact Form</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactPage;
