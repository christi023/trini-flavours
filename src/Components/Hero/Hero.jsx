import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './Hero.css';

const Hero = () => {
  // method
  const handleClick = () => console.log('Clicked!');

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-left">
          <div className="row">
            <div className="col-lg-8">
              <h1>
                Welcome to <span>Trini Flavours</span>
              </h1>
              <h2>Delivering great food and services</h2>

              <div className="btns">
                <Link to="/menu" className=" btn-menu" type="button" onClick={handleClick}>
                  Our Menu
                </Link>

                <Link to="/book-a-table" className="btn-book " type="button" onClick={handleClick}>
                  Book a Table
                </Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-left justify-content-left">
              <Link to="/youTube" className="play-btn" data-vbtype="video" data-autoplay="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
