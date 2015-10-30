"use strict";

import React        from 'react';
import Route        from 'react-router';
import IndexRoute   from 'react-router';
import Index        from './components/index';
import Home         from './components/main/home';
import NotFound     from './components/not_found';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFound}/>
  </Route>
);