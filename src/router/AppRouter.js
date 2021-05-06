import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navigation/Navbar';
import { PresentacionPage } from '../components/Pages/PresentacionPage';
import { OneDicePage } from '../components/Pages/OneDicePage';
import { TwoDicePage } from '../components/Pages/TwoDicePage';
import { DiceOptions } from '../components/Pages/DiceOptions';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={PresentacionPage} />
        <Route exact path="/one" component={OneDicePage} />
        <Route exact path="/two" component={TwoDicePage} />
        <Route exact path="/opt" component={DiceOptions} />
      </Switch>
    </Router>
  );
};
