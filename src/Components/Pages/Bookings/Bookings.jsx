import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
// styles
import './Bookings.css';

export default function Bookings() {
  // state
  const [data, setData] = useState({
    Name: '',
    email: '',
    data: '',
    time: '',
    people: '',
    phone: '',
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
      `Hey ${data.Name} your booking request was sent. We will call back or send an email to confirm your reservation. Thank you!`,
    );
  };

  return (
    <>
      <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>Reservation</h2>
            <p>Book a Table</p>
          </div>

          <Form onSubmit={formSubmit} className="email-form" action="post" method="post">
            <Form.Row>
              <Col lg={4} className="form-group">
                <Form.Group controlId="formGridName">
                  <Form.Control
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Your Name"
                    onChange={InputEvent}
                    value={data.Name}
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>

              <Col lg={4}>
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="info@example.com"
                    onChange={InputEvent}
                    value={data.email}
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>

              <Col lg={4}>
                <Form.Group controlId="date">
                  <Form.Control
                    type="text"
                    name="date"
                    className="form-control"
                    placeholder="Date"
                    onChange={InputEvent}
                    value={data.date}
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>

              <Col lg={4}>
                <Form.Group controlId="time">
                  <Form.Control
                    type="text"
                    name="time"
                    className="form-control"
                    placeholder="Time"
                    onChange={InputEvent}
                    value={data.time}
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>

              <Col lg={4}>
                <Form.Group controlId="people">
                  <Form.Control
                    type="number"
                    name="people"
                    className="form-control"
                    placeholder="# of people"
                    onChange={InputEvent}
                    value={data.people}
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>

              <Col lg={4}>
                <Form.Group controlId="phone">
                  <Form.Control
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={InputEvent}
                    value={data.phone}
                  />
                  <div className="validate"></div>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group controlId="formMessage">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                data-msg="Please write something for us"
                placeholder="Message"
                onChange={InputEvent}
                value={data.message}
              ></textarea>
              <div className="validate"></div>
            </Form.Group>

            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
            </div>
            <div className="text-center">
              <button type="submit">Book a Table</button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
