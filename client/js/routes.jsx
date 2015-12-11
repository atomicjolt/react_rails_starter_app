"use strict";

import React                  from 'react'; // if you use jsx, you have to have React imported
import Router                 from 'react-router';
import { Route, IndexRoute }  from 'react-router';
import history                from './history';
import Index                  from './components/containers/index';
import Home                   from './components/views/home';

export default (
  <Router history={history}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);
