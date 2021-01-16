import React from 'react';
import { Row } from 'react-bootstrap';
// Component
import GalleryData from './GalleryData';
import GalleryCard from './GalleryCard';

// styles
import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5em', marginLeft: '-1.0em' }}>Gallery</h2>
            <p>Our Restaurant Photos</p>
          </div>
        </div>

        <div className="container-fluid">
          <Row className="no-gutters">
            {GalleryData.map((val, i) => (
              <GalleryCard key={i} imgSrc={val.imgSrc} />
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Gallery;
