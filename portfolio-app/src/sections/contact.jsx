import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./section.css";

const Contact = (props) => {
  return (
    <div id="contact" className="section-contact-jumbo">
      <h1>contact form here i gues?</h1>
      <ContactUs />
    </div>
  );
};

export default Contact;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY, //service
        process.env.REACT_APP_TEMPLATE_KEY, //template
        form.current,
        process.env.REACT_APP_API_KEY //pbk
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
