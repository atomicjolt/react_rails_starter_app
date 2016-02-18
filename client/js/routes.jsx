"use strict";

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';
import Index                          from './components/layout/index';
import Home                           from './components/home';
import { hashHistory }                from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
