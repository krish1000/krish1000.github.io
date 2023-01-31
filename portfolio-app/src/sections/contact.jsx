import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
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
        <h1>Connect with me!</h1>
        <br />
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;

export const ContactForm = () => {
  /** Async Loading buttons */
  const [isLoading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    console.log(e);
    emailjs.sendForm;
    process.env.REACT_APP_SERVICE_KEY, //service
      process.env.REACT_APP_TEMPLATE_KEY, //template
      form.current,
      process.env
        .REACT_APP_API_KEY //pbk
        ()
        .then(
          (result) => {
            console.log("WWWWWWWWWWWWWWWW");
            console.log(result.text); //returns "OK"
            setLoading(false);
            setShowAlert(true);
          },
          (error) => {
            console.log("LLLLLLLLLLLLLLLL");
            console.log(error.text);
            setLoading(false);
            setShowAlert(true);
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
          placeholder="<Your Email>"
          name="user_email"
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message for me</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="<Let me know what's up!>"
          name="message"
        />
      </Form.Group>
      {isLoading ? (
        <Button disabled={isLoading} variant="dark" type="submit">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          &nbsp; Sending Message...
        </Button>
      ) : (
        <Button disabled={isLoading} variant="dark" type="submit">
          Send Message
        </Button>
      )}

      {(() => {
        console.log(showAlert);
        if (!showAlert) {
          return (
            <div>
              <br />
              <Alert
                variant="success"
                onClose={() => setShowAlert(true)}
                dismissible
              >
                <Alert.Heading>heading!</Alert.Heading>
                <p>thnx for msging me etc. FIX THIS!</p>
              </Alert>
            </div>
          );
        }
      })()}
    </Form>
  );
};
