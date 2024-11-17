import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for email functionality
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contacts" className="container">
      <div id="contact-div">
        <a href="mailto:gaurav.t2002@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img src="../../../assets/images/Email.png" alt="Email" className="icon" />
          <span>Email:</span> gaurav.t2002@gmail.com
        </a>
        <a href="#contacts" className="contact-item">
          <img src="../../../assets/images/Phone.png" alt="Phone" className="icon" />
          <span>Phone:</span> +91 8920633049
        </a>
        <div id="contact-list" className="social-links">
          <a href="https://www.linkedin.com/in/gaurav-thakur-1042601b7/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="../../../assets/images/Linkedin.png" alt="LinkedIn" className="icon" />
            <span>LinkedIn:</span> Gaurav Thakur
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Send a Message</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
