import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// styles
import './Chefs.css';

const ChefCard = (props) => {
  return (
    <Col lg={4} md={6}>
      <div className="member">
        <img src={props.imgSrc} className="img-chef" alt="" />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{props.name}</h4>
            <span>{props.title}</span>
          </div>
          <div className="social">
            <Link to="/" className="twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ChefCard;
