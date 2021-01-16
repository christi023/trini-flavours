import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Menu from './Components/Pages/Menu/Menu';
import Specials from './Components/Pages/Specials/Specials';
import Gallery from './Components/Pages/Gallery/Gallery';
import Chefs from './Components/Pages/Chefs/Chefs';

// styles
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/specials" component={Specials} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/chefs" component={Chefs} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
