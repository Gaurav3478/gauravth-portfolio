import React, { useState } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_o2nav1i";
    const templateId = "template_mwldgx8";
    const publicKey = "Md5kdU0N6F5zlbxeH";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Gaurav",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        var element = document.getElementById(
          "succesful-response-after-sending"
        );
        element.classList.remove("succesful-response-appear");
      })
      .catch((error) => {
        var element = document.getElementById(
          "unsuccesful-response-after-sending"
        );
        element.classList.remove("unsuccesful-response-appear");
      });
  };

  return (
    <div className="contact-page-container">
      <div id="contacts" className="container">
        <div className="contact-details">
          <h1 className="contact-header">Get in Touch</h1>
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
            </a>
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
            </a>
            <a href="#contacts" className="contact-item contact-item-phone">
              <img
                src="../../../assets/images/Phone.png"
                alt="Phone"
                className="icon"
              />
              <span>+91 8920633049</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="emailForm">
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
          <input
            type="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Email</button>
        </form>
        <div
          id="succesful-response-after-sending"
          className="succesful-response-appear appear"
        >
          Email Sent successfully :)
        </div>
        <div
          id="unsuccesful-response-after-sending"
          className="unsuccesful-response-appear appear"
        >
          Error sending email....Try Again Later :(
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
