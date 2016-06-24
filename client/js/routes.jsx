"use strict";

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';
import Index                          from './components/layout/index';
import Home                           from './components/home';
import appHistory                     from './history';

export default (
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
