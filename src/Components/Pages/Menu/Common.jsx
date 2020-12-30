import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
//import lobster from '../../../assets/menu/lobster-bisque.jpg';

const Common = (props) => {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Our Tasty Menu</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li>Starters</li>
              <li>Salads</li>
              <li>Specialty</li>
            </ul>
          </div>
        </div>
        <br />

        <div className="row menu-container">
          <div className="col-lg-6 menu-item filter-starters">
            <img src={props.imgSrc} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Lobster Bisque</Link>
              <span>$5.95</span>
            </div>
            <div className="menu-ingredients">Lorem, deren, trataro, filede, nerada</div>
          </div>
          <br />

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={props.imgSrc1} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Bread Barrel</Link>
              <span>$6.95</span>
            </div>
            <div className="menu-ingredients">Lorem, deren, trataro, filede, nerada</div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src={props.imgSrc2} className="menu-img" alt="" />
            <div className="menu-content" alt="">
              <Link to="">Crab Cake</Link>
              <span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={props.imgSrc3} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Caesar Selections</Link>
              <span>$8.95</span>
            </div>
            <div className="menu-ingredients">Lorem, deren, trataro, filede, nerada</div>
          </div>
          <div className="col-lg-6 menu-item filter-specialty">
            <img src={props.imgSrc4} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Tuscan Grilled</Link>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <img src={props.imgSrc5} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Mozzarella Stick</Link>
              <span>$4.95</span>
            </div>
            <div className="menu-ingredients">Lorem, deren, trataro, filede, nerada</div>
          </div>
          <div className="col-lg-6 menu-item filter-salads">
            <img src={props.imgSrc6} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Greek Salad</Link>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-salads">
            <img src={props.imgSrc7} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Spinach Salad</Link>
              <span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-specialty">
            <img src={props.imgSrc8} className="menu-img" alt="" />
            <div className="menu-content">
              <Link to="">Lobster Roll</Link>
              <span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
