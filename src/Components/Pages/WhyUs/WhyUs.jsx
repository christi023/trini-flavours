import React from 'react';
import { Row, Col } from 'react-bootstrap';

// style
import './WhyUs.css';

const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5em' }}>Why Us</h2>
            <br />
            <p>Why Choose Trini Flavours</p>
          </div>
          <br />

          <Row>
            <Col lg={4} md={6} className="d-flex align-items-stretch">
              <div className="box">
                <span>
                  <i className="fas fa-handshake"></i>
                </span>
                <h4>SUPERIOR VALUE</h4>
                <p>
                  If you are looking for value for money, Trini Flavours delivers. You will receive
                  a fresh 100% home made dish in a portion size that won’t leave you scrapping your
                  plate.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4 mt-md-0">
              <div className="box">
                <span>
                  <i className="fas fa-thumbs-up"></i>
                </span>
                <h4>100% HOME MADE </h4>
                <p>
                  By creating everything from the start, we have 100% control over the ingredients
                  used, the quality and the freshness of the dish. You will taste the difference.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="box">
                <span>
                  <i className="fas fa-book-open"></i>
                </span>
                <h4>FLEXIBLE MENU</h4>
                <p>
                  Whether you’re looking to dine with three people or 20 people, we can mix and
                  match food combinations without a hassle. No one has to fight over the last roti!
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4">
              <div className="box">
                <span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
                <h4>FIVE STAR RATINGS </h4>
                <p>
                  Hungry on a Sunday or a Monday? That’s no problem Trini Flavours is open 7 days a
                  week.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4">
              <div className="box">
                <span>
                  <i className="fas fa-photo-video"></i>
                </span>
                <h4>AMAZING PHOTOS</h4>
                <p>Photography on the spot with a great ambience for that enticing atmosphere</p>
              </div>
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-stretch mt-4">
              <div className="box">
                <span>
                  <i className="fas fa-door-open"></i>
                </span>
                <h4>OPEN 7 DAYS </h4>
                <p>
                  Hungry on a Sunday or a Monday? That’s no problem Trini Flavours is open 7 days a
                  week.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
