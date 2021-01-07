import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
// assets
import test1 from '../../../assets/testimonials/testimonials-1.jpg';
//styles
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div class="section-title">
          <h2>Testimonials</h2>
          <p>What they're saying about us</p>
        </div>

        <Carousel className="testimonials-carousel">
          <Carousel.Item className="testimonial-item">
            <Row>
              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left "></i>
                  Trini Flavours exceeded our expectations. The service, the presentation and
                  efficiency exceeded everything we had experienced before.
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Ceo &amp; Founder</h4>
                <br />
              </Col>

              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left"></i>
                  Trini Flavours were also quite flexible and accommodated all of the client’s
                  requests. Their staff was efficient, and at no time were they absent from the
                  floor.
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Brand Activator</h4>
                <br />
              </Col>

              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left"></i>
                  There’s absolutely nothing I can complain about following my experience with Trini
                  Flavours. They provided the food and beverage service for our Gala.
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Ceo &amp; Founder</h4>
                <br />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item className="testimonial-item">
            <Row>
              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left"></i>
                  The pricing was well within budget if not cheaper than other companies who did not
                  come to even 50% of what was delivered on the day – EXCELLENT
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Ceo &amp; Founder</h4>
                <br />
              </Col>

              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left"></i>
                  Lavish Foundation has had the pleasure of working with Trini Flavours over the
                  years. Their quality service for our special events is top notch.
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Ceo &amp; Founder</h4>
                <br />
              </Col>

              <Col md={4}>
                <p>
                  <i className="fas fa-quote-left"></i>
                  “Thank you Trini Flavours for your professionalism showed at our function on June
                  21st, 2017.The meals were well prepared and very tasty.
                  <i className="fas fa-quote-right"></i>
                </p>
                <img src={test1} className="testimonial-img" alt="" />
                <h3>Jimmy Larson</h3>
                <h4>Ceo &amp; Founder</h4>
                <br />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
