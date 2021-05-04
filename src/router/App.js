import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navigation/Navbar';
import { OneDice } from '../components/Pages/OneDice';
import { Presentacion } from '../components/Pages/Presentacion';
import { TwoDice } from '../components/Pages/TwoDice';
//import { Options } from './components/Options';

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Presentacion} />
        <Route exact path="/one" component={OneDice} />
        <Route exact path="/two" component={TwoDice} />
      </Switch>
      {/* <Options /> */}
    </Router>
  );
};
