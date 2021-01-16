import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// styles
import './Gallery.css';

const GalleryCard = (props) => {
  return (
    <>
      <Col lg={3} md={4}>
        <div className="gallery-item">
          <Link to="" />
          <img src={props.imgSrc} className="img-gallery" alt="" />
        </div>
      </Col>
    </>
  );
};

export default GalleryCard;
