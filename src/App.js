import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LoginPage from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import Waiter from './pages/Waiter/index.js';
import Kitchen from './pages/Kitchen/index.js';
import Orders from './pages/Orders/index.js';
import NotFound from './pages/NotFound/index.js';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/waiter'>
        <Waiter />
      </Route>
      <Route path='/kitchen'>
        <Kitchen />
      </Route>
      <Route path='/orders'>
      <Orders />
      </Route>
      <Route>
        <NotFound />
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
