import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdRestaurant } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

// style
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  // method hamburger menu - mobile
  const handleClick = () => setClick(!click);

  // button menu for mobile devices
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdRestaurant className="navbar-icon" />
              Trini Flavours
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/specials" className="nav-links" onClick={closeMobileMenu}>
                  Specials
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chefs" className="nav-links" onClick={closeMobileMenu}>
                  Chefs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="book-a-table text-center">
                <Link to="#book-a-table" className="nav-links" onClick={closeMobileMenu}>
                  Book a table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
