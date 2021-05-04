import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navigation/Navbar';
import { Options } from '../components/Options';
import { OneDice } from '../components/Pages/OneDice';
import { Presentacion } from '../components/Pages/Presentacion';
import { TwoDice } from '../components/Pages/TwoDice';

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Presentacion} />
        <Route exact path="/one" component={OneDice} />
        <Route exact path="/two" component={TwoDice} />
        <Route exact path="/options" component={Options} />
      </Switch>
    </Router>
  );
};
