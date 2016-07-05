'use strict';

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';
import Index                          from './components/layout/index';
import Home                           from './components/home';
import appHistory                     from './history';

// @todo: replace this with a `real` component or template
const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
  </div>
);

export default (
  <Router history={appHistory}>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
