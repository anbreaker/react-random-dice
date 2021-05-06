import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navigation/Navbar';
// import { OptionsPage } from '../components/Pages/OptionsPage';
import { OneDicePage } from '../components/Pages/OneDicePage';
import { PresentacionPage } from '../components/Pages/PresentacionPage';
import { TwoDicePage } from '../components/Pages/TwoDicePage';

import { Pruebas } from '../components/Pruebas';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={PresentacionPage} />
        <Route exact path="/one" component={OneDicePage} />
        <Route exact path="/two" component={TwoDicePage} />
        {/* <Route exact path="/options" component={OptionsPage} /> */}
        <Route exact path="/opt" component={Pruebas} />
      </Switch>
    </Router>
  );
};
