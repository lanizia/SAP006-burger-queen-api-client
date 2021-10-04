import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/index.js';
import Register from '../pages/Register/index.js';
import Waiter from '../pages/Waiter/index.js';
import Kitchen from '../pages/Kitchen/index.js';
import Orders from '../pages/Orders/index.js';
import NotFound from '../pages/NotFound/index.js';
import PrivateRoute from './PrivateRoute.js';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/waiter' component={Waiter} />
          <PrivateRoute path='/kitchen' component={Kitchen} />
          <PrivateRoute path='/orders' component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
