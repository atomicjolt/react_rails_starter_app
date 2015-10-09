"use strict";

import React        from 'react';
import Router       from 'react-router';

import Index        from './components/index';
import Home         from './components/main/home';
import NotFound     from './components/not_found';

var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Redirect      = Router.Redirect;

export default (
  <Route name='root' path='/' handler={Index}>
    <DefaultRoute name='home' handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
