import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navigation/Navbar';
import { Options } from '../components/Options';
import { OneDicePage } from '../components/Pages/OneDicePage';
import { Presentacion } from '../components/Pages/Presentacion';
import { TwoDicePage } from '../components/Pages/TwoDicePage';

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Presentacion} />
        <Route exact path="/one" component={OneDicePage} />
        <Route exact path="/two" component={TwoDicePage} />
        <Route exact path="/options" component={Options} />
      </Switch>
    </Router>
  );
};
