import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/login.js';
import HomePageWaiter from './pages/homePageWaiter.js';
import HomePageKitchen from './pages/homePageKitchen.js';
import NewOrderPage from './pages/newOrderPage.js';
import NotFoundPage from './pages/notFoundPage.js';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/homePageWaiter'>
        <HomePageWaiter />
      </Route>
      <Route path='/homePageKitchen'>
        <HomePageKitchen />
      </Route>
      <Route path='/newOrderPage'>
      <NewOrderPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
