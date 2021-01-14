import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import { ObjOne, ObjTwo, ObjThree, ObjFour, ObjFive, ObjSix } from './Data';
import Card from './Card';

//styles
import './Testimonials.css';

const Testimonials = () => {
  return (
    <>
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
                  <Card {...ObjOne} />
                  <br />
                </Col>

                <Col md={4}>
                  <Card {...ObjTwo} />
                  <br />
                </Col>

                <Col md={4}>
                  <Card {...ObjThree} />
                </Col>
                <br />
              </Row>
            </Carousel.Item>

            <Carousel.Item className="testimonial-item">
              <Row>
                <Col md={4}>
                  <Card {...ObjFour} />
                  <br />
                </Col>

                <Col md={4}>
                  <Card {...ObjFive} />
                  <br />
                </Col>

                <Col md={4}>
                  <Card {...ObjSix} />
                  <br />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
