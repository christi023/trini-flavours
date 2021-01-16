import React from 'react';
import { Row } from 'react-bootstrap';
// Components
import ChefCard from './ChefCard';
import ChefDetails from './ChefDetails';

// styles
import './Chefs.css';

const Chefs = () => {
  return (
    <>
      <section id="chefs" className="chefs">
        <div className="container">
          <div className="section-title">
            <h2>Chefs</h2>
            <p>Our Professional Chefs</p>
          </div>
          <Row>
            {ChefDetails.map((val, i) => (
              <ChefCard key={i} imgSrc={val.imgSrc} name={val.name} title={val.title} />
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};
export default Chefs;
