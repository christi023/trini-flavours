import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './Components/Navbar/Navbar';

// styles
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
