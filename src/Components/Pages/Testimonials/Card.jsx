import React from 'react';
// styles
import './Testimonials.css';

const Card = (props) => {
  return (
    <>
      <p>
        <i className="fas fa-quote-left"></i>
        {props.p}
        <i className="fas fa-quote-right"></i>
      </p>
      <img src={props.imgSrc} className="testimonial-img" alt="" />
      <br />
      {props.h3}
      <br />
      {props.h4}
      <br />
    </>
  );
};

export default Card;
