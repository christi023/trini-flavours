import React from 'react';
import about from '../../../assets/about.jpg';
// style
import './About.css';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="about-img">
                <img src={about} alt="" />
              </div>
            </div>
            <br />

            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                Trini Flavours approach is light-hearted – but the Trini Flavours commitment is
                heavy.
              </h3>
              <p className="font-italic">
                Trini Flavours promise is to serve every diner the best food, made with the best
                ingredients, by excellent chefs, complemented by the ideal wine or perfect beverage.
              </p>
              <br />
              <ul>
                <li>
                  <i className="far fa-check-circle"></i> Trini Flavours painstakingly created menu
                  is exotic without being expensive.
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Food that send palates into a spin without
                  making wallets crash.
                </li>
                <li>
                  <i className="far fa-check-circle"></i> At Trini Flavours we offer something for
                  everyone!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
