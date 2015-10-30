"use strict";

import React        from 'react';
import Route        from 'react-router';
import IndexRoute   from 'react-router';
import Index        from './components/index';
import Home         from './components/main/home';
import Login        from './components/sessions/login';
import Logout       from './components/sessions/logout';
import Register     from './components/users/register';
import Dashboard    from './components/main/dashboard';
import NotFound     from './components/not_found';
import Connections  from './components/users/connections';
import About        from './components/main/about';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="logout" component={Logout}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="connections" component={Connections}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NotFound}/>
  </Route>
);