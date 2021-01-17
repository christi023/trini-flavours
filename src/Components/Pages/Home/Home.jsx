import React from 'react';
// Components
import Hero from '../../Hero/Hero';
import About from '../../Pages/About/About';
import WhyUs from '../../Pages/WhyUs/WhyUs';
import Menu from '../../Pages/Menu/Menu';
import Specials from '../../Pages/Specials/Specials';
import Events from '../../Pages/Events/Events';
import Bookings from '../../Pages/Bookings/Bookings';
import Testimonials from '../../Pages/Testimonials/Testimonials';
import Gallery from '../../Pages/Gallery/Gallery';
import Chefs from '../../Pages/Chefs/Chefs';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Pages/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Specials />
      <Events />
      <Bookings />
      <Testimonials />
      <Gallery />
      <Chefs />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
