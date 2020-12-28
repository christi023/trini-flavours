import React from 'react';
// component
import Common from './Common';
// assets
import lobster from '../../../assets/menu/lobster-bisque.jpg';
import bread from '../../../assets/menu/bread-barrel.jpg';
import cake from '../../../assets/menu/cake.jpg';
import caesar from '../../../assets/menu/caesar.jpg';
import tuscan from '../../../assets/menu/tuscan-grilled.jpg';
import mozzarella from '../../../assets/menu/mozzarella.jpg';
import greek from '../../../assets/menu/greek-salad.jpg';
import spinach from '../../../assets/menu/spinach-salad.jpg';
import lobster2 from '../../../assets/menu/lobster-roll.jpg';

// style
import './Menu.css';

const Menu = () => {
  return (
    <>
      <Common
        imgSrc={lobster}
        imgSrc1={bread}
        imgSrc2={cake}
        imgSrc3={caesar}
        imgSrc4={tuscan}
        imgSrc5={mozzarella}
        imgSrc6={greek}
        imgSrc7={spinach}
        imgSrc8={lobster2}
      />
    </>
  );
};

export default Menu;
