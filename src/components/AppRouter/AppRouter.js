import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chips from '../Chips/Chips'
import NavBar from '../NavBar/NavBar'
import Sardines from '../Sardines/Sardines'
import VendingMachine from '../VendingMachine/VendingMachine'

function AppRouter() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ VendingMachine }/>
        <Route path="/chips" component={ Chips }/>
        <Route path="/sardines" component={ Sardines }/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
