import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// styles
import './Contact.css';

export default function Contact() {
  // state
  const [data, setData] = useState({
    Name: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hey ${data.Name}!. Thanks for contacting us. We will get back to you as soon as possible`,
    );
  };
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5em', marginLeft: '-1.0em' }}>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <iframe
            title="google location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4507.474260477943!2d13.057881679997548!3d55.60658848248515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a22d7772bae7%3A0xcd37675bf6f9af1f!2sBulltofta%2C%20Kirseberg%2C%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1598208002562!5m2!1ssv!2sse"
            frameBorder="0"
            style={{ border: '0', width: '100%', height: '350px' }}
            allowFullScreen
          ></iframe>
        </div>
        <br />
        <br />

        <div className="container">
          <Row mt={5}>
            <Col lg={4}>
              <div className="info">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Location:</h4>
                  <p>Carlsvägen 5, Malmö. Sweden</p>
                </div>

                <div className="open-hours">
                  <i className="far fa-clock"></i>
                  <h4>Opening Hours:</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    10.00 AM - 21:00 PM
                  </p>
                </div>

                <div className="email">
                  <i className="fas fa-envelope"></i>
                  <h4>Email Us:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="fas fa-phone"></i>
                  <h4>Call Us:</h4>
                  <p>+46 876 765616</p>
                </div>
                <br />
                <br />
              </div>
            </Col>

            <Col lg={8} mt={5} mt-lg={0}>
              <Form onSubmit={formSubmit} className="email-form">
                <Form.Row>
                  <Col md={6} className="form-group">
                    <Form.Group controlId="formGridName">
                      <Form.Control
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Your Name"
                        onChange={InputEvent}
                      />
                      <div className="validate"></div>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="form-group">
                    <Form.Group controlId="formGridEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="info@example.com"
                        onChange={InputEvent}
                      />
                      <div className="validate"></div>
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Group controlId="formGridSubject">
                  <Form.Control
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    onChange={InputEvent}
                  />
                  <div className="validate"></div>
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    onChange={InputEvent}
                  ></textarea>
                  <div className="validate"></div>
                </Form.Group>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
