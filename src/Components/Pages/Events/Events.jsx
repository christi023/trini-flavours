import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
// assets
import birthday from '../../../assets/birthday.jpeg';
import event from '../../../assets/private.jpeg';
import custom from '../../../assets/custom.jpeg';
// styles
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ fontSize: '2.5em' }}>Events</h2>
          <p>Organize Your Events at Trini Flavours</p>
        </div>

        <Carousel className=" events-carousel">
          <Carousel.Item>
            <Row className="row event-item">
              <Col lg={6}>
                <img src={birthday} className="img-event" alt="" />
              </Col>

              <Col lg={6}>
                <h3>Birthday Parties</h3>
                <div className="price">
                  <p>
                    <span>$189</span>
                  </p>
                </div>
                <p className="font-italic">
                  We have a complete team of wait staff that is available to handle every aspect of
                  your event, starting from setup to ending with the night’s clean-up.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i> Our price includes all crockery,
                    cutlery, chafers, tablecloths and skirting along with serving accessories.
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> Food that send palates into a spin
                    without making wallets crash.
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> At Trini Flavours we treat every event
                    with special attention.
                  </li>
                </ul>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row event-item">
              <Col lg={6}>
                <img src={event} className="img-event" alt="" />
              </Col>

              <Col lg={6}>
                <h3>Private Parties</h3>
                <div className="price">
                  <p>
                    <span>$189</span>
                  </p>
                </div>
                <p className="font-italic">
                  Our delivery staff is always on time and can bring both hot & cold food items
                  right to your venue, at no additional cost. If you’re in our local area feel free
                  to swing by and pick up your order from our kitchen or dispatch team.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i> This can be arranged for up to many
                    persons, normally for special events, if requested, and on on selected menus.
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>We offer rentals of crockery, cutlery,
                    chafers, cloth napkins, tablecloths, chair covers, and more.
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> At planning process much easier.
                  </li>
                </ul>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row event-item">
              <Col lg={6}>
                <img src={custom} className="img-event" alt="" />
              </Col>

              <Col lg={6}>
                <h3>Custom Parties</h3>
                <div className="price">
                  <p>
                    <span>$189</span>
                  </p>
                </div>
                <p className="font-italic">
                  We offer a few bar options to suit your specific type of event and budget.
                  Fully-stocked premium bars to basic alcoholic or non-alcoholic bars.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i> We also offer mixology services to
                    create signature drinks that reflect your style and event.
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> Be it cocktails, mocktails or
                    margaritas, we can do it all!
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> Feel free to mix and match from our list
                    of desserts or provide your own which we can set up and serve to your guests.
                  </li>
                </ul>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
