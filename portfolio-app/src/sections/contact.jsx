import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./section.css";

const Contact = (props) => {
  return (
    <div
      id="contact"
      className="section-contact-jumbo"
      style={{ margin: "50px" }}
    >
      <Container>
        <h1>contact form here i gues?</h1>
        <ContactUs />
      </Container>
    </div>
  );
};

export default Contact;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e);
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
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Messagesss</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="<Insert Email Here>"
          name="user_email"
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message here blah</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="<Let me know what's up!>"
          name="message"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
