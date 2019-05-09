import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chips from '../Chips/Chips'
import NavBar from '../NavBar/NavBar'
import Sardines from '../Sardines/Sardines'
import Soda from '../Soda/Soda'
import VendingMachine from '../VendingMachine/VendingMachine'

function AppRouter() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ VendingMachine }/>
        <Route path="/chips" component={ Chips }/>
        <Route path="/sardines" component={ Sardines }/>
        <Route path="/soda" component={ Soda }/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
